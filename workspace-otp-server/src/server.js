require('dotenv').config();
const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

const guardCheck = require('./middleware/guardCheck');
const internalGuard = require('./middleware/internalGuard');
const authController = require('./controllers/auth');
const internalController = require('./controllers/internal');

const app = express();

// Allow only the configured frontend origin (or all origins in development).
// Set CORS_ORIGIN in .env to the deployed frontend URL, e.g. https://ka-sesiung.web.app
const corsOptions = {
    origin: process.env.CORS_ORIGIN || (process.env.NODE_ENV === 'development' ? '*' : false),
    methods: ['POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'X-Internal-Token'],
};
app.use(cors(corsOptions));
app.use(express.json());

// Hardware protection: Rate limit to prevent spamming the physical router SIM cards
// Limit: Max 3 requests per IP per 5 minutes
const otpLimiter = rateLimit({
    windowMs: 5 * 60 * 1000, 
    max: 3, 
    message: { error: "Too many requests, please try again later." }
});

// --- ROUTES ---

// 1. Request OTP (Rate limited + Guarded by clients.json)
app.post('/api/auth/request-otp', otpLimiter, guardCheck, authController.requestOtp);

// 2. Verify OTP (Guarded by clients.json to ensure they weren't removed mid-session)
app.post('/api/auth/verify-otp', guardCheck, authController.verifyOtp);

// 3. Internal Sync (Google Sheets → local clients.json) — requires shared secret header
app.post('/api/internal/sync-clients', internalGuard, internalController.syncClients);

// --- START SERVER ---
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`\n=================================================`);
    console.log(`🚀 Zero-DB OTP Workspace Auth Server running on port ${PORT}`);
    console.log(`🛡️  Hardware Mode: ${process.env.NODE_ENV === 'development' ? 'Mock (Console Logs)' : 'Active (Huawei)'}`);
    console.log(`=================================================\n`);
});
