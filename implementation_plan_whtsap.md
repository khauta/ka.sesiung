# Pluggable WhatsApp OTP Delivery System

## Goal
To implement a standalone, pluggable WhatsApp OTP delivery service using `whatsapp-web.js`. This module will act as a secondary delivery channel. If a client has `"subscribed_to_whatsapp_otp": true`, the server will prioritize WhatsApp over hardware SMS. The bot will be strictly one-way; it will warn users who try to reply to it, and automatically block them after 3 attempts.

## User Review Required
Please review the plan below. The WhatsApp bot runs using Puppeteer (Headless Chrome) to simulate a real WhatsApp Web session. When the server starts, it will print a QR code to your terminal that you must scan with the phone you want to act as the sender. 

> [!WARNING]
> Because WhatsApp does not officially support bots through the Web interface, there is a risk the sending number could be banned by WhatsApp if flagged. Please use a dedicated test number for scanning the QR code, rather than your personal primary number!

## Proposed Changes

### Backend Dependencies
- Run `npm install whatsapp-web.js qrcode-terminal` in the `workspace-otp-server` directory.

### Data Layer
#### [MODIFY] [clients.json](file:///home/aurum/Documents/Projects/Business/Liparola%20FC/ka.sesiung/workspace-otp-server/data/clients.json)
- Add `"subscribed_to_whatsapp_otp": true` to the active test client (`+26657284264`) to route their OTPs through WhatsApp.
- Add `"subscribed_to_whatsapp_otp": false` to the other mock clients.

### Services Layer
#### [NEW] [whatsappOtp.js](file:///home/aurum/Documents/Projects/Business/Liparola%20FC/ka.sesiung/workspace-otp-server/src/services/whatsappOtp.js)
- Create the standalone bot module.
- Initialize the `Client` using `LocalAuth` (so you only have to scan the QR code once).
- Use `qrcode-terminal` to render the authentication QR directly in your console.
- Implement a `message` event listener with an internal `Map` to track user interaction counts.
- Send a warning message on the 1st and 2nd replies: *"⚠️ Automated Message. You cannot reply to this number."*
- On the 3rd reply, send a final notice and call `contact.block()`.
- Export an `initialize()` and `sendOtp(phone, otp)` function.

### Controller & Server Layer
#### [MODIFY] [server.js](file:///home/aurum/Documents/Projects/Business/Liparola%20FC/ka.sesiung/workspace-otp-server/src/server.js)
- Import the new module and call `whatsappOtp.initialize()` non-blockingly when the server boots.

#### [MODIFY] [auth.js](file:///home/aurum/Documents/Projects/Business/Liparola%20FC/ka.sesiung/workspace-otp-server/src/controllers/auth.js)
- Update `requestOtp` to check `req.clientInfo.subscribed_to_whatsapp_otp`.
- If true (and the bot is authenticated/ready), await `whatsappOtp.sendOtp(phone, otp)`.
- If false, gracefully fall back to the existing `hardwareSms.sendSMS(phone, otp)`.

## Verification Plan
1. Start the server and scan the QR code printed in the terminal.
2. Ensure the "ready" log fires.
3. Trigger an OTP login from the frontend using the enabled client phone number.
4. Verify the OTP arrives via WhatsApp instead of the SMS gateway.
5. Reply to the WhatsApp bot 3 times to verify the warning logic and the blocking action.
