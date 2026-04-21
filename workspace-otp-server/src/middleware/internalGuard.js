/**
 * internalGuard — shared-secret middleware for the /api/internal/* routes.
 *
 * The Google Apps Script caller (backend/code.gs) must include the header
 *   X-Internal-Token: <INTERNAL_SECRET>
 * where INTERNAL_SECRET matches the value configured in the server .env.
 *
 * This prevents any anonymous caller from overwriting clients.json.
 */

const internalGuard = (req, res, next) => {
    const provided = req.headers['x-internal-token'];
    const expected = process.env.INTERNAL_SECRET;

    if (!expected) {
        console.error('❌ [INTERNAL GUARD] INTERNAL_SECRET env var is not set. Rejecting request.');
        return res.status(500).json({ error: 'Server misconfiguration: internal secret not configured.' });
    }

    if (!provided || provided !== expected) {
        console.warn('🚨 [INTERNAL GUARD] Unauthorized internal sync attempt.');
        return res.status(403).json({ error: 'Forbidden: invalid or missing internal token.' });
    }

    next();
};

module.exports = internalGuard;
