require('dotenv').config();
const express = require('express');
const { google } = require('googleapis');
const bodyParser = require('body-parser');
const path = require('path'); // <-- THIS IS THE MISSING LINE!

const app = express();
const PORT = 3000;
const SPREADSHEET_ID = process.env.SPREADSHEET_ID;
const RANGE = 'Sheet1!A:D'; // Define the range: e.g., 'Sheet1!A:D' covers the first four columns

// <-- ADD THIS LINE to load the credentials JSON file
const SERVICE_ACCOUNT_CREDENTIALS = require(path.join(__dirname, 'credentials.json')); 

// --- Middleware Setup ---
app.use(bodyParser.json());
app.use(express.json());

// --- Google Sheets API Setup ---
let sheets;

// // Function to authenticate and initialize the sheets client
// async function authAndInitSheets() {
//     // try {
//     //     // Authenticate using the service account key file (credentials.json)
//     //     const auth = new google.auth.GoogleAuth({
//     //         keyFile: 'credentials.json',
//     //         scopes: ['https://www.googleapis.com/auth/spreadsheets'], // Scope for reading/writing sheets
//     //     });
        
//     //     // Get the GoogleAuth client
//     //     const authClient = await auth.getClient();
        
//     //     // Initialize the sheets client
//     //     sheets = google.sheets({ version: 'v4', auth: authClient });
//     //     console.log('✅ Google Sheets API client initialized successfully.');
//     // }
//     try {
//         // --- UPDATED AUTHENTICATION LOGIC ---
//         const auth = new google.auth.GoogleAuth({
//             credentials: SERVICE_ACCOUNT_CREDENTIALS, // Directly pass the loaded JSON object
//             scopes: ['https://www.googleapis.com/auth/spreadsheets'], 
//         });
//         // --- END UPDATED AUTHENTICATION LOGIC ---

//         const authClient = await auth.getClient();
        
//         sheets = google.sheets({ version: 'v4', auth: authClient });
//         console.log('✅ Google Sheets API client initialized successfully.');
//     }  catch (error) {
//         console.error('❌ Error during Google Sheets API initialization:', error.message);
//         process.exit(1); // Exit if we can't connect
//     }
// }
// Function to authenticate and initialize the sheets client
async function authAndInitSheets() {
    try {
        // Step 1: Create JWT client directly (new recommended approach)
        const auth = new google.auth.JWT({
            email: SERVICE_ACCOUNT_CREDENTIALS.client_email,
            key: SERVICE_ACCOUNT_CREDENTIALS.private_key,
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        // Step 2: Initialize the Sheets client with JWT auth
        sheets = google.sheets({ 
            version: 'v4', 
            auth,
            timeout: 10000, // 10 second timeout
            retry: {
                retries: 3,
                statusCodesToRetry: [[100, 199], [429, 429], [500, 599]]
            }
        });

        // Step 3: Verify authentication with a simple API call
        await sheets.spreadsheets.get({
            spreadsheetId: SPREADSHEET_ID,
            fields: 'spreadsheetId'
        });

        console.log('✅ Google Sheets API client initialized successfully.');
    } catch (error) {
        console.error('❌ Error during Google Sheets API initialization:');
        if (error.code === 'ETIMEDOUT') {
            console.error('Connection timed out. Please check your network connection.');
        } else if (error.response) {
            console.error('API Error:', error.response.data);
        } else {
            console.error('Error details:', error);
        }
        process.exit(1);
    }
}


// --- CRUD Endpoints ---

// 1. READ (GET) - Fetch all data
app.get('/api/data', async (req, res) => {
    try {
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: SPREADSHEET_ID,
            range: RANGE,
        });

        // The first row is usually headers, we'll include them for context
        const rows = response.data.values || [];
        res.status(200).json({ message: 'Data fetched successfully', data: rows });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data.');
    }
});

// 2. CREATE (POST) - Add a new row
app.post('/api/data', async (req, res) => {
    // Example expected body: { "values": ["New Name", "new@example.com", "Active", "2025-01-01"] }
    const { values } = req.body; 

    if (!values || !Array.isArray(values) || values.length === 0) {
        return res.status(400).send('Invalid or missing values array in request body.');
    }

    try {
        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: SPREADSHEET_ID,
            range: RANGE,
            valueInputOption: 'USER_ENTERED', // Interprets the data as if a user typed it
            resource: {
                values: [values], // Append expects an array of rows, so we wrap 'values'
            },
        });
        
        res.status(201).json({ 
            message: 'Data created successfully', 
            updates: response.data.updates 
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error creating data.');
    }
});

// 3. UPDATE (PUT) - Update a specific row
// Note: Row number in the URL is 1-indexed, corresponding to the sheet row number.
app.put('/api/data/:row', async (req, res) => {
    // Example expected body: { "values": ["Updated Name", "update@example.com", "Inactive", "2025-02-02"] }
    const { values } = req.body;
    // We add 1 to the range index because Google Sheets is 1-indexed
    const row = parseInt(req.params.row, 10); 
    
    if (isNaN(row) || row <= 0) {
        return res.status(400).send('Invalid row number.');
    }
    if (!values || !Array.isArray(values) || values.length === 0) {
        return res.status(400).send('Invalid or missing values array in request body.');
    }

    try {
        // Construct the range for the specific row, assuming data starts at column A
        const rowRange = `Sheet1!A${row}`; 
        
        const response = await sheets.spreadsheets.values.update({
            spreadsheetId: SPREADSHEET_ID,
            range: rowRange,
            valueInputOption: 'USER_ENTERED',
            resource: {
                values: [values],
            },
        });

        res.status(200).json({ 
            message: `Row ${row} updated successfully`, 
            updates: response.data.updatedData 
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error updating data.');
    }
});

// 4. DELETE (DELETE) - Delete a specific row
// Note: Deleting rows shifts subsequent rows up, making row indices unreliable quickly.
// This is a simple implementation, but in a real app, you'd prefer to CLEAR the data or mark it as 'DELETED'.
app.delete('/api/data/:row', async (req, res) => {
    const row = parseInt(req.params.row, 10); 

    if (isNaN(row) || row <= 0) {
        return res.status(400).send('Invalid row number.');
    }
    
    // We assume the first row (1) is headers and should not be deleted
    if (row === 1) {
         return res.status(403).send('Cannot delete the header row.');
    }

    try {
        // The batchUpdate method is used for structural changes like deleting rows.
        const response = await sheets.spreadsheets.batchUpdate({
            spreadsheetId: SPREADSHEET_ID,
            resource: {
                requests: [{
                    deleteDimension: {
                        range: {
                            sheetId: 0, // 0 is usually the default first sheet ID
                            dimension: 'ROWS',
                            startIndex: row - 1, // API uses 0-indexed start
                            endIndex: row,       // API uses exclusive end index
                        },
                    },
                }],
            },
        });

        res.status(200).json({ 
            message: `Row ${row} deleted successfully (Note: Subsequent rows have shifted!)`, 
            response: response.data 
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error deleting data.');
    }
});


// --- Start Server ---
authAndInitSheets().then(() => {
    app.listen(PORT, () => {
        console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
});