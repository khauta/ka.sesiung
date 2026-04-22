require('dotenv').config();
const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

const guardCheck = require('./middleware/guardCheck');
const internalGuard = require('./middleware/internalGuard');
const authController = require('./controllers/auth');
const internalController = require('./controllers/internal');

// Fail fast in production if a restricted CORS origin hasn't been set.
if (process.env.NODE_ENV === 'production' && !process.env.CORS_ORIGIN) {
    console.error('❌ CORS_ORIGIN env var is required in production. Exiting.');
    process.exit(1);
}

const app = express();

const corsOptions = {
    origin: function (origin, callback) {
        // Allow absolutely any origin to pass through for now to rule out CORS issues
        callback(null, true);
    },
    methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Internal-Token', 'Accept'],
    credentials: true
};
app.use(cors(corsOptions));

// Simple logger to see what's hitting the server locally
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl} from ${req.headers.origin || 'unknown origin'}`);
    next();
});
app.use(express.json());

// Hardware protection: Rate limit to prevent spamming the physical router SIM cards
// Limit: Max 3 requests per IP per 5 minutes
const otpLimiter = rateLimit({
    windowMs: 5 * 60 * 1000, 
    max: 3, 
    message: { error: "Too many requests, please try again later." }
});

// Internal sync rate limit — defence in depth even though internalGuard checks a secret.
// Limit: Max 10 sync operations per IP per minute.
const syncLimiter = rateLimit({
    windowMs: 60 * 1000,
    max: 10,
    message: { error: "Too many sync requests, please try again later." }
});

// --- ROUTES ---

// 1. Request OTP (Rate limited + Guarded by clients.json)
app.post('/api/auth/request-otp', otpLimiter, guardCheck, authController.requestOtp);

// 2. Verify OTP (Guarded by clients.json to ensure they weren't removed mid-session)
app.post('/api/auth/verify-otp', guardCheck, authController.verifyOtp);

// 3. Internal Sync (Google Sheets → local clients.json) — requires shared secret header
app.post('/api/internal/sync-clients', syncLimiter, internalGuard, internalController.syncClients);

// --- START SERVER ---
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`\n=================================================`);
    console.log(`🚀 Zero-DB OTP Workspace Auth Server running on port ${PORT}`);
    console.log(`🛡️  Hardware Mode: ${process.env.NODE_ENV === 'development' ? 'Mock (Console Logs)' : 'Active (Huawei)'}`);
    console.log(`=================================================\n`);
});
