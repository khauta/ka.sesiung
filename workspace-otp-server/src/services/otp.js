const NodeCache = require('node-cache');
const crypto = require('crypto');

// stdTTL: 300 seconds = 5 minutes. After 5 mins, OTP is auto-deleted.
// checkperiod: 60 seconds (cleans up expired items)
const otpCache = new NodeCache({ stdTTL: 300, checkperiod: 60 });

const generateAndCacheOTP = (phone) => {
    // Generate a secure 6-digit numeric OTP
    const otp = crypto.randomInt(100000, 999999).toString();
    
    // Store in cache with the phone number as the key
    otpCache.set(phone, otp);
    return otp;
};

const verifyOTP = (phone, inputOtp) => {
    const cachedOtp = otpCache.get(phone);
    
    if (!cachedOtp) return false; // OTP doesn't exist or expired
    
    if (cachedOtp === inputOtp) {
        // SUCCESS: Immediately invalidate the OTP to prevent replay attacks
        otpCache.del(phone);
        return true;
    }
    return false; // Wrong OTP
};

module.exports = {
    generateAndCacheOTP,
    verifyOTP
};
