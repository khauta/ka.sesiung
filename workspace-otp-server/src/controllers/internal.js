const { writeClientsData } = require('../utils/clientStore');

const syncClients = (req, res) => {
    try {
        const clientsJson = req.body;

        if (
            !clientsJson ||
            typeof clientsJson !== 'object' ||
            typeof clientsJson.clients !== 'object' ||
            typeof clientsJson.workspaceUsers !== 'object'
        ) {
            return res.status(400).json({ error: 'Invalid payload format.' });
        }

        writeClientsData(clientsJson);

        console.log('✅ [SYNC] Successfully received and updated clients.json from Google Sheets.');

        return res.status(200).json({ message: 'Clients synchronized successfully.' });
    } catch (err) {
        console.error('❌ [SYNC ERROR] Failed to write clients.json:', err);
        return res.status(500).json({ error: 'Internal server error syncing clients.' });
    }
};

module.exports = { syncClients };
