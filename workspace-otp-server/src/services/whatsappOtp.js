const { Client, LocalAuth } = require('whatsapp-web.js');

let client;
let isReady = false;

// Track warnings for users who interact with the bot
const warningMap = new Map();

function initialize() {
    console.log('Starting WhatsApp OTP Bot...');

    client = new Client({
        authStrategy: new LocalAuth(),
        puppeteer: {
            args: [
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-dev-shm-usage',
                '--disable-gpu'
            ],
            // Must be headless in server environment unless explicitly debugging
            headless: false,
        }
    });

    client.on('qr', qr => {
        console.log('=============================================');
        console.log('WhatsApp OTP Bot: Scan this QR code to authenticate');
        console.log('WARNING: Use a dedicated test number, NOT your primary number to avoid bans!');
        console.log('=============================================');
        require('qrcode-terminal').generate(qr, { small: true });
    });

    client.on('ready', () => {
        console.log('WhatsApp OTP Bot is authenticated and READY!');
        isReady = true;
    });

    client.on('authenticated', () => {
        console.log('WhatsApp client authenticated successfully');
    });

    client.on('message', async msg => {
        try {
            const from = msg.from;

            let warnings = warningMap.get(from) || 0;
            warnings++;
            warningMap.set(from, warnings);

            console.log(`Received message from ${from}. Interaction count: ${warnings}`);

            if (warnings === 1 || warnings === 2) {
                await msg.reply('⚠️ *Automated Message*\nYou cannot reply to this number. This channel is strictly for automated OTP delivery. If you persist, you will be blocked.');
            } else if (warnings >= 3) {
                await msg.reply('🚫 *Final Warning*\nDue to repeated interactions, your number is now blocked from this bot.');
                const contact = await msg.getContact();
                await contact.block();
                console.log(`Blocked contact: ${from}`);
            }
        } catch (error) {
            console.error('Error handling incoming WhatsApp message:', error);
        }
    });

    client.on('error', (error) => {
        console.error('WhatsApp Client Error:', error);
        isReady = false;
    });

    client.on('disconnected', (reason) => {
        console.log('WhatsApp Client disconnected:', reason);
        isReady = false;
    });

    client.initialize().catch(err => {
        console.error('Failed to initialize WhatsApp bot:', err);
    });
}

/**
 * Sends an OTP via WhatsApp if the bot is ready
 */
async function sendOtp(phone, otp) {
    if (!isReady) {
        throw new Error('WhatsApp bot is not ready or not authenticated yet.');
    }

    try {
        // Strip out the '+' and append standard WhatsApp c.us domain
        const cleanPhone = phone.replace('+', '');
        const chatId = `${cleanPhone}@c.us`;

        const message = `*Ka Sesiung Workspace*\nYour login OTP is: *${otp}*\n\n_Valid for 5 minutes. Do not reply to this message._`;

        await client.sendMessage(chatId, message);
        console.log(`Successfully sent WhatsApp OTP to ${phone}`);
    } catch (error) {
        console.error(`Failed to send WhatsApp OTP to ${phone}:`, error);
        throw error;
    }
}

module.exports = {
    initialize,
    sendOtp,
    isReady: () => isReady
};
