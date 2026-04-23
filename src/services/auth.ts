/// <reference types="vite/client" />

import type { SubscriptionStatus, UserRole } from '../types/index';

export interface ClientInfo {
  phone: string;
  phone_1?: string;
  phone_2?: string;
  clientId: string;
  name: string;
  email?: string;
  role?: UserRole;
  access?: string;
  subscription?: string;
  subscriptionStatus?: SubscriptionStatus;
  planId?: string;
}

const TOKEN_KEY = 'ks_auth_token';
const USER_KEY = 'ks_auth_user';

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
      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem(USER_KEY);
    }
  }

  isAuthenticated(): boolean {
    return this._token !== null && !this._isExpired(this._token);
  }

  getToken(): string | null {
    return this._token;
  }

  getUser(): ClientInfo | null {
    return this._user;
  }

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

  async verifyOtp(phone: string, otp: string): Promise<void> {
    const res = await fetch(`${OTP_SERVER_URL}/api/auth/verify-otp`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ phone, otp }),
    });
    const body = await res.json().catch(() => ({})) as Record<string, unknown>;
    if (!res.ok) {
      throw new Error((body['error'] as string | undefined) ?? `OTP verification failed (${res.status})`);
    }
    this._token = body['token'] as string;
    this._user = body['client'] as ClientInfo;
    localStorage.setItem(TOKEN_KEY, this._token);
    localStorage.setItem(USER_KEY, JSON.stringify(this._user));
    this._emit();
  }

  signOut(): void {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
    sessionStorage.removeItem(PENDING_PHONE_KEY);
    this._token = null;
    this._user = null;
    this._emit();
  }

  private _isExpired(token: string): boolean {
    try {
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
      }),
    );
  }
}

export const authService = new AuthService();
