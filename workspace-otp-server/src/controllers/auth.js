const jwt = require('jsonwebtoken');
const otpService = require('../services/otp');
const hardwareSms = require('../services/hardwareSms');

const requestOtp = async (req, res) => {
    const { phone } = req.body;
    
    try {
        const otp = otpService.generateAndCacheOTP(phone);
        const message = `Your workspace login OTP is: ${otp}. Valid for 5 mins.`;

        // Send via Hardware SMS
        await hardwareSms.sendSMS(phone, message);

        // DO NOT return the OTP in the response for security
        res.status(200).json({ message: "OTP generated and passed to SMS Gateway." });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to send OTP via SMS gateway." });
    }
};

const verifyOtp = (req, res) => {
    const { phone, otp } = req.body;
    const clientInfo = req.clientInfo; // Injected securely by guardCheck middleware

    if (!phone || !otp) {
        return res.status(400).json({ error: "Phone and OTP required" });
    }

    const isValid = otpService.verifyOTP(phone, otp);

    if (!isValid) {
        return res.status(401).json({ error: "Invalid or expired OTP" });
    }

    // Sign JWT Token valid for 8 hours (standard workspace shift)
    const token = jwt.sign(
        { 
            phone, 
            clientId: clientInfo.clientId, 
            name: clientInfo.name,
            role: clientInfo.role,
            access: clientInfo.access,
            subscription: clientInfo.subscription
        }, 
        process.env.JWT_SECRET, 
        { expiresIn: '8h' }
    );

    res.status(200).json({
        message: "Authentication successful",
        token: token,
        client: clientInfo
    });
};

module.exports = {
    requestOtp,
    verifyOtp
};
