/**
 * Google Apps Script for "Serverless Spreadsheet"
 * 
 * Instructions:
 * 1. Open your Google Sheet.
 * 2. Go to Extensions > Apps Script.
 * 3. Paste this code into Code.gs.
 * 4. Setup triggers: Edit -> Current project's triggers -> Add Trigger -> syncRowToFirestore -> onEdit
 */

const PROJECT_ID = "superstore-b3500"; 
// Replace with the actual Template File ID from Google Drive
const TEMPLATE_DOC_ID = "YOUR_TEMPLATE_DOC_ID_HERE";

function onEdit(e) {
  if (!e) return;
  const sheet = e.range.getSheet();
  if (sheet.getName() !== "Master_Log") return;

  const rowIdx = e.range.getRow();
  if (rowIdx < 2) return; // Skip header

  const rowData = sheet.getRange(rowIdx, 1, 1, 9).getValues()[0];
  const generateDocChecked = rowData[7]; // Column H (0-indexed 7)
  let updatedUrl = rowData[8];           // Column I (0-indexed 8)

  if (generateDocChecked === true) {
    // Read ClientPhone (A=0), Title (D=3), Amount (G=6)
    const clientPhone = rowData[0];
    const title = rowData[3];
    const amount = rowData[6];

    if (clientPhone && title) {
      // 3. Copy Google Doc Template
      const newFile = DriveApp.getFileById(TEMPLATE_DOC_ID).makeCopy(`${title} - ${clientPhone}`);
      const newDocId = newFile.getId();
      
      // 4. Replace text placeholders
      const newDoc = DocumentApp.openById(newDocId);
      const body = newDoc.getBody();
      body.replaceText("{{TITLE}}", title || "");
      body.replaceText("{{AMOUNT}}", amount || "");
      newDoc.saveAndClose();

      // 5. Grant View access
      DriveApp.getFileById(newDocId).setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
      
      // 6. Write URL into Column I and unset checkbox in Column H
      updatedUrl = newDoc.getUrl();
      sheet.getRange(rowIdx, 9).setValue(updatedUrl);
      sheet.getRange(rowIdx, 8).setValue(false);
      
      // Update rowData for the sync
      rowData[8] = updatedUrl;
    }
  }

  // 7. Sync to Firestore in either case
  syncRowToFirestore(rowData);
}

function syncRowToFirestore(row) {
  // Column A: ClientPhone
  const clientPhone = row[0]; 
  if (!clientPhone) return;

  const data = {
    resourceId: row[1], // Column B
    category: row[2],   // Column C
    title: row[3],      // Column D
    label: row[4],      // Column E
    percentage: parseInt(row[5], 10) || 0, // Column F
    amount: row[6],     // Column G
    url: row[8],        // Column I
    updatedAt: new Date().toISOString()
  };

  if (!data.resourceId) return;

  // Firestore REST API Format
  const firestoreUrl = `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents/users/`;
  
  const payload = {
    fields: {
      category: { stringValue: data.category || "" },
      title: { stringValue: data.title || "" },
      status: { 
        mapValue: {
          fields: {
            state: { stringValue: "active" }, 
            percentage: { integerValue: data.percentage },
            label: { stringValue: String(data.label || "") }
          }
        }
      },
      artifacts: {
        arrayValue: {
          values: []
        }
      },
      updatedAt: { timestampValue: data.updatedAt }
    }
  };

  if (data.url) {
    payload.fields.artifacts.arrayValue.values.push({
      mapValue: {
        fields: {
          url: { stringValue: data.url },
          type: { stringValue: "link" },
          name: { stringValue: "Generated Document" }
        }
      }
    });
  }

  // Path: users/{clientPhone}/resources/{resourceId}
  const endpoint = firestoreUrl + encodeURIComponent(clientPhone) + "/resources/" + encodeURIComponent(data.resourceId);
  const options = {
    method: "patch",
    contentType: "application/json",
    payload: JSON.stringify(payload),
    muteHttpExceptions: true
  };

  const response = UrlFetchApp.fetch(endpoint, options);
  Logger.log(response.getContentText());
}

// ============================================
// OTP Server Integration
// ============================================

function syncClientsToServer() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = sheet.getDataRange().getValues(); // Assumes Col A: Phone, B: ID, C: Name, D: Status
  
  let clientsJson = {};
  for (let i = 1; i < data.length; i++) { // Start at 1 to skip headers
    let phone = String(data[i][0]).trim();
    if (phone) {
      if (!phone.startsWith('+')) phone = '+' + phone; // Enforce strict E.164
      
      clientsJson[phone] = {
        clientId: String(data[i][1]),
        name: String(data[i][2]),
        status: String(data[i][3]).toLowerCase()
      };
    }
  }
  
  // POST the JSON to your local Node server (Use Ngrok/Tailscale IP if running locally)
  // Ensure you update YOUR_SERVER_IP or setup a proper subdomain route to reach your local server
  // The X-Internal-Token header must match the INTERNAL_SECRET set in workspace-otp-server/.env
  const INTERNAL_SECRET = PropertiesService.getScriptProperties().getProperty('INTERNAL_SECRET') || '';
  const response = UrlFetchApp.fetch("http://YOUR_SERVER_IP:3000/api/internal/sync-clients", {
    method: "post",
    contentType: "application/json",
    headers: { "X-Internal-Token": INTERNAL_SECRET },
    payload: JSON.stringify(clientsJson),
    muteHttpExceptions: true
  });
  
  if(response.getResponseCode() === 200) {
    SpreadsheetApp.getUi().alert("✅ Successfully synced to OTP Server!");
  } else {
    SpreadsheetApp.getUi().alert("❌ Failed to sync: " + response.getContentText());
  }
}

// Add a button to your Sheets UI
function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('Workspace Admin')
    .addItem('Push Sync to OTP Server', 'syncClientsToServer')
    .addToUi();
}
