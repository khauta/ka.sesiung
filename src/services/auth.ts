/// <reference types="vite/client" />

/**
 * AuthService — workspace-otp-server JWT auth client
 *
 * Replaces Firebase phone auth. All auth state lives here; components
 * subscribe to 'auth-changed' events instead of onAuthStateChanged.
 *
 * Session is persisted in localStorage so page reloads keep the user
 * signed in until the 8-hour JWT expires or they sign out explicitly.
 */

export interface ClientInfo {
  phone: string;
  clientId: string;
  name: string;
  role?: string;
  access?: string;
  subscription?: string;
}

const TOKEN_KEY = 'ks_auth_token';
const USER_KEY = 'ks_auth_user';

/** Key used by view-login / view-otp / view-signup to pass the phone
 *  between screens without exposing it in a global window property. */
export const PENDING_PHONE_KEY = 'ks_pending_phone';

const OTP_SERVER_URL: string =
  import.meta.env.VITE_OTP_SERVER_URL ?? 'http://localhost:3000';

class AuthService extends EventTarget {
  private _token: string | null = null;
  private _user: ClientInfo | null = null;

  constructor() {
    super();
    const token = localStorage.getItem(TOKEN_KEY);
    const user = localStorage.getItem(USER_KEY);
    if (token && user && !this._isExpired(token)) {
      this._token = token;
      this._user = JSON.parse(user) as ClientInfo;
    } else {
      // Clear any stale data
      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem(USER_KEY);
    }
  }

  // ── Public API ──────────────────────────────────────────────────────────

  isAuthenticated(): boolean {
    return this._token !== null && !this._isExpired(this._token);
  }

  getToken(): string | null {
    return this._token;
  }

  getUser(): ClientInfo | null {
    return this._user;
  }

  /**
   * Request an OTP for the given E.164 phone number.
   * The server delivers it via hardware SMS gateway.
   */
  async requestOtp(phone: string): Promise<void> {
    const res = await fetch(`${OTP_SERVER_URL}/api/auth/request-otp`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ phone }),
    });
    if (!res.ok) {
      const body = await res.json().catch(() => ({})) as Record<string, string>;
      throw new Error(body['error'] ?? `OTP request failed (${res.status})`);
    }
  }

  /**
   * Confirm the OTP received by SMS. On success the JWT is stored and
   * an 'auth-changed' event is emitted so every subscriber updates.
   */
  async verifyOtp(phone: string, otp: string): Promise<void> {
    const res = await fetch(`${OTP_SERVER_URL}/api/auth/verify-otp`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ phone, otp }),
    });
    const body = await res.json().catch(() => ({})) as Record<string, any>;
    if (!res.ok) {
      throw new Error(body['error'] ?? `OTP verification failed (${res.status})`);
    }
    this._token = body['token'] as string;
    this._user = body['client'] as ClientInfo;
    localStorage.setItem(TOKEN_KEY, this._token);
    localStorage.setItem(USER_KEY, JSON.stringify(this._user));
    this._emit();
  }

  /** Clear session and notify all subscribers. */
  signOut(): void {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
    sessionStorage.removeItem(PENDING_PHONE_KEY);
    this._token = null;
    this._user = null;
    this._emit();
  }

  // ── Private helpers ──────────────────────────────────────────────────────

  private _isExpired(token: string): boolean {
    try {
      // Decode JWT payload without verifying signature (trust comes from HTTPS
      // transport + server-side signing; client only needs expiry metadata).
      const payload = JSON.parse(atob(token.split('.')[1])) as { exp: number };
      return Date.now() >= payload.exp * 1000;
    } catch {
      return true;
    }
  }

  private _emit(): void {
    this.dispatchEvent(
      new CustomEvent<{ user: ClientInfo | null }>('auth-changed', {
        detail: { user: this._user },
      })
    );
  }
}

/** Singleton — import this everywhere instead of constructing locally. */
export const authService = new AuthService();
