# Dynamic Routing on Authentication Success

## Goal
To configure the application to gracefully handle authentication success, store the JWT token and user profile in local storage, and dynamically route the user to the correct page (`hub`, `tracker`, or `vault`) based on their `role`, `access`, and `subscription` fields.

## User Review Required
Please review the proposed mapping logic and provide specific rules for how `role`, `access`, and `subscription` should map to the application's routes.

> [!IMPORTANT]
> The application currently has three main authenticated routes: `hub`, `tracker`, and `vault`. I need to know the exact rules for routing users. For example:
> - If `role === 'admin'`, do they always go to the `hub`?
> - If `access === 'logistics'`, do they go directly to the `tracker`?
> - If `access === 'finance'`, do they go to the `vault`?
> - Does the `subscription` type (e.g., 'pro' vs 'basic') affect their landing page?

## Proposed Changes

### Backend Changes

#### [MODIFY] [clients.json](file:///home/aurum/Documents/Projects/Business/Liparola%20FC/ka.sesiung/workspace-otp-server/data/clients.json)
- Add `role` (e.g., `'admin'`, `'user'`), `access` (e.g., `'full'`, `'logistics'`), and `subscription` (e.g., `'pro'`, `'basic'`) fields to the existing client entries to support the new routing logic.

#### [MODIFY] [auth.js](file:///home/aurum/Documents/Projects/Business/Liparola%20FC/ka.sesiung/workspace-otp-server/src/controllers/auth.js)
- Update the JWT signing payload in `verifyOtp` to include `role`, `access`, and `subscription` from `clientInfo` so that the token correctly reflects the full user profile.

### Frontend Changes

#### [MODIFY] [auth.ts](file:///home/aurum/Documents/Projects/Business/Liparola%20FC/ka.sesiung/src/services/auth.ts)
- Update the `ClientInfo` interface to type the new fields: `role`, `access`, and `subscription`.
- *Note: `authService.verifyOtp` already correctly stores the JWT and user data in `localStorage`, satisfying the requirement to persist session state.*

#### [MODIFY] [view-otp.ts](file:///home/aurum/Documents/Projects/Business/Liparola%20FC/ka.sesiung/src/views/view-otp.ts)
- Replace the hardcoded `router.navigate('app://hub');` with a dynamic routing function.
- After successful OTP verification, inspect the retrieved `authService.getUser()` data and navigate the user to the appropriate view based on the mapping rules provided in response to the open question above.

## Verification Plan

### Automated/Manual Verification
- Modify `clients.json` to have multiple test users with different roles, access, and subscriptions.
- Start the `workspace-otp-server` and the frontend app.
- Login with each test user and verify that upon OTP verification:
  1. The token and user data are correctly stored in `localStorage`.
  2. The app automatically routes the user to the correct landing page (Hub, Tracker, or Vault) based on their assigned configuration.
