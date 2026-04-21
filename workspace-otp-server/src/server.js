require('dotenv').config();
const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

const guardCheck = require('./middleware/guardCheck');
const authController = require('./controllers/auth');
const internalController = require('./controllers/internal');

const app = express();
app.use(cors());
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

// 3. Internal Sync (Google Sheets to local clients.json)
app.post('/api/internal/sync-clients', internalController.syncClients);

// --- START SERVER ---
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`\n=================================================`);
    console.log(`🚀 Zero-DB OTP Workspace Auth Server running on port ${PORT}`);
    console.log(`🛡️  Hardware Mode: ${process.env.NODE_ENV === 'development' ? 'Mock (Console Logs)' : 'Active (Huawei)'}`);
    console.log(`=================================================\n`);
});
