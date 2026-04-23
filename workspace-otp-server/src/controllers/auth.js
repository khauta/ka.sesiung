const jwt = require('jsonwebtoken');
const otpService = require('../services/otp');
const hardwareSms = require('../services/hardwareSms');
const whatsappOtp = require('../services/whatsappOtp');

const requestOtp = async (req, res) => {
    const { phone } = req.body;

    try {
        const otp = otpService.generateAndCacheOTP(phone);
        const message = `Your workspace login OTP is: ${otp}. Valid for 5 mins.`;
        const clientInfo = req.clientInfo;

        if (clientInfo && clientInfo.subscribed_to_whatsapp_otp && whatsappOtp.isReady()) {
            await whatsappOtp.sendOtp(phone, otp);
            res.status(200).json({ message: 'OTP generated and passed to WhatsApp Gateway.' });
        } else {
            await hardwareSms.sendSMS(phone, message);
            res.status(200).json({ message: 'OTP generated and passed to SMS Gateway.' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to send OTP via SMS gateway.' });
    }
};

const verifyOtp = (req, res) => {
    const { phone, otp } = req.body;
    const clientInfo = req.clientInfo;

    if (!phone || !otp) {
        return res.status(400).json({ error: 'Phone and OTP required' });
    }

    const isValid = otpService.verifyOTP(phone, otp);

    if (!isValid) {
        return res.status(401).json({ error: 'Invalid or expired OTP' });
    }

    const token = jwt.sign(
        {
            phone,
            phone_1: clientInfo.phone_1,
            phone_2: clientInfo.phone_2,
            clientId: clientInfo.clientId,
            name: clientInfo.name,
            email: clientInfo.email,
            role: clientInfo.role,
            access: clientInfo.access,
            subscription: clientInfo.subscription,
            subscriptionStatus: clientInfo.subscriptionStatus,
            planId: clientInfo.planId,
        },
        process.env.JWT_SECRET,
        { expiresIn: '8h' },
    );

    res.status(200).json({
        message: 'Authentication successful',
        token,
        client: clientInfo,
    });
};

module.exports = {
    requestOtp,
    verifyOtp,
};
