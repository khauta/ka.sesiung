const path = require('path');

// Safe loader: Allows server to run even before you put the folders in /lib
let HuaweiRouter;
try {
    HuaweiRouter = require('../../lib/huawei-router-api');
} catch (err) {
    console.warn("⚠️ [WARN] Local Huawei API not found. SMS will fallback to dev logs.");
}

const attemptSendViaRouter = async (ip, user, pass, phone, message) => {
    if (!HuaweiRouter) throw new Error("HuaweiRouter package missing.");
    
    // Instantiate router connection based on typical Huawei API structures
    const router = new HuaweiRouter();
    await router.config.setUrl(`http://${ip}`);
    
    await router.admin.login(user, pass);
    await router.sms.send([phone], message); // The API expects an array of phone numbers
    await router.admin.logout();
};

const sendSMS = async (phone, message) => {
    // Development mode / Mock Fallback
    if (process.env.NODE_ENV === 'development' || !HuaweiRouter) {
        console.log(`\n📱 [MOCK SMS GATEWAY]`);
        console.log(`To: ${phone}`);
        console.log(`Message: ${message}\n`);
        return true;
    }

    try {
        console.log(`[SMS] Attempting to send via Router A (${process.env.ROUTER_1_IP})...`);
        await attemptSendViaRouter(
            process.env.ROUTER_1_IP,
            process.env.ROUTER_USER,
            process.env.ROUTER_PASS,
            phone,
            message
        );
        console.log(`[SMS] ✅ Sent successfully via Router A.`);
        return true;

    } catch (errorA) {
        console.error(`[SMS] ❌ Router A failed: ${errorA.message}`);
        console.log(`[SMS] 🔄 Initiating failover to Router B (${process.env.ROUTER_2_IP})...`);

        try {
            await attemptSendViaRouter(
                process.env.ROUTER_2_IP,
                process.env.ROUTER_USER,
                process.env.ROUTER_PASS,
                phone,
                message
            );
            console.log(`[SMS] ✅ Sent successfully via Router B.`);
            return true;
            
        } catch (errorB) {
            console.error(`[SMS] ❌ Router B failed: ${errorB.message}`);
            throw new Error('CRITICAL: Both hardware SMS gateways failed.');
        }
    }
};

module.exports = { sendSMS };
