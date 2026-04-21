const fs = require('fs');
const path = require('path');

const syncClients = (req, res) => {
    try {
        const clientsJson = req.body;
        
        // Basic validation
        if (!clientsJson || typeof clientsJson !== 'object') {
            return res.status(400).json({ error: "Invalid payload format." });
        }

        const clientsPath = path.join(__dirname, '../../data/clients.json');
        
        // Write the data natively back to clients.json
        fs.writeFileSync(clientsPath, JSON.stringify(clientsJson, null, 2));

        console.log("✅ [SYNC] Successfully received and updated clients.json from Google Sheets.");
        
        return res.status(200).json({ message: "Clients synchronized successfully." });
    } catch (err) {
        console.error("❌ [SYNC ERROR] Failed to write clients.json:", err);
        return res.status(500).json({ error: "Internal server error syncing clients." });
    }
};

module.exports = { syncClients };
