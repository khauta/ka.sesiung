const fs = require('fs');
const path = require('path');

const guardCheck = (req, res, next) => {
    const { phone } = req.body;

    if (!phone) {
        return res.status(400).json({ error: "Phone number is required" });
    }

    try {
        // Read file dynamically on every request. 
        // This allows updates (e.g., from Google Sheets sync) without restarting the Node server.
        const clientsPath = path.join(__dirname, '../../data/clients.json');
        const clientsData = JSON.parse(fs.readFileSync(clientsPath, 'utf8'));

        const client = clientsData[phone];

        // Reject if not found or not active
        if (!client || client.status !== 'active') {
            console.warn(`🚨 Unauthorized login attempt for number: ${phone}`);
            return res.status(403).json({ error: "Access denied. Number not registered or inactive." });
        }

        // Attach client info to request for the next handler
        req.clientInfo = client;
        next();

    } catch (err) {
        console.error("Error reading clients.json:", err);
        return res.status(500).json({ error: "Internal server error reading identity list." });
    }
};

module.exports = guardCheck;
