const { buildAuthClientInfo, readClientsData } = require('../utils/clientStore');

const guardCheck = (req, res, next) => {
    const { phone } = req.body;

    if (!phone) {
        return res.status(400).json({ error: 'Phone number is required' });
    }

    try {
        const clientsData = readClientsData();
        const clientInfo = buildAuthClientInfo(clientsData, phone);

        if (!clientInfo || !clientInfo.isActive) {
            console.warn(`🚨 Unauthorized login attempt for number: ${phone}`);
            return res.status(403).json({ error: 'Access denied. Number not registered or inactive.' });
        }

        req.clientInfo = clientInfo;
        next();
    } catch (err) {
        console.error('Error reading clients.json:', err);
        return res.status(500).json({ error: 'Internal server error reading identity list.' });
    }
};

module.exports = guardCheck;
