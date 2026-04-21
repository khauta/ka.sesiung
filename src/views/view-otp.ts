import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { router } from '../router/index';

@customElement('view-otp')
export class ViewOtp extends LitElement {
  @state() private otp = '';
  @state() private error = '';
  @state() private loading = false;
  @state() private resendCountdown = 30;

  private timer?: number;

  static styles = css`
    :host {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      padding: 16px;
      box-sizing: border-box;
    }
    .card {
      background: var(--surface-color, #fff);
      border-radius: 12px;
      padding: 32px;
      width: 100%;
      max-width: 400px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      text-align: center;
    }
    h2 { margin-top: 0; color: #333; }
    .input-group {
      display: flex;
      flex-direction: column;
      text-align: left;
      margin-bottom: 24px;
    }
    .input-group label {
      font-size: 0.9rem;
      margin-bottom: 8px;
      color: #555;
      text-align: center;
    }
    input {
      padding: 12px;
      border: 1px solid #ccc;
      border-radius: 8px;
      outline: none;
      font-size: 1.5rem;
      text-align: center;
      letter-spacing: 0.5em;
    }
    input:focus {
      border-color: var(--primary-color, #6200ee);
      background: #fafafa;
    }
    .error {
      color: #d32f2f;
      font-size: 0.85rem;
      margin-top: 8px;
      text-align: center;
      min-height: 20px;
    }
    button {
      width: 100%;
      padding: 14px;
      background: var(--primary-color, #6200ee);
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 1rem;
      font-weight: 500;
      cursor: pointer;
      transition: background 0.3s;
    }
    button:hover { background: #3700b3; }
    button:disabled { background: #ccc; cursor: not-allowed; }
    .resend {
      margin-top: 24px;
      font-size: 0.9rem;
      color: #666;
    }
    .resend button {
      background: transparent;
      color: var(--primary-color, #6200ee);
      width: auto;
      padding: 0;
      display: inline;
    }
    .resend button:hover {
      background: transparent;
      text-decoration: underline;
    }
    .resend button:disabled {
      color: #999;
      background: transparent;
      text-decoration: none;
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    this.startTimer();
    // Validate we actually have a confirmation session
    if (!(window as any).confirmationResult) {
      console.warn('No confirmation result found, routing back to login');
      router.navigate('app://login');
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.timer) clearInterval(this.timer);
  }

  private startTimer() {
    this.resendCountdown = 30;
    this.timer = window.setInterval(() => {
      if (this.resendCountdown > 0) {
        this.resendCountdown--;
      } else {
        clearInterval(this.timer);
      }
    }, 1000);
  }

  private handleInput(e: Event) {
    const target = e.target as HTMLInputElement;
    const val = target.value.replace(/\D/g, '');
    if (val.length <= 6) {
      this.otp = val;
      target.value = val;
    } else {
      target.value = this.otp;
    }
    this.error = '';
  }

  private async handleSubmit(e: Event) {
    e.preventDefault();
    if (this.otp.length !== 6) {
      this.error = 'OTP must be 6 digits.';
      return;
    }

    const confResult = (window as any).confirmationResult;
    if (!confResult) {
      this.error = 'Session expired. Please try logging in again.';
      return;
    }

    this.loading = true;
    this.error = '';

    try {
      await confResult.confirm(this.otp);
      // Success, clear it out global scope
      delete (window as any).confirmationResult;
      router.navigate('app://hub');
    } catch (err: any) {
      console.error('Invalid OTP', err);
      this.error = 'Invalid verification code. Please try again.';
    } finally {
      this.loading = false;
    }
  }

  private handleResend() {
    if (this.resendCountdown === 0) {
      // Logic to resend would go back to login flow or invoke hidden recaptcha again
      this.error = 'To protect your account, please request a new code from the login page.';
      setTimeout(() => router.navigate('app://login'), 2000);
    }
  }

  private goBack(e: Event) {
    e.preventDefault();
    router.navigate('app://login');
  }

  render() {
    return html`
      <div class="card">
        <h2>Verify Phone</h2>
        <p style="color: #666; margin-bottom: 24px;">
          We sent a 6-digit code to your phone.<br>
          <a href="#" @click="${this.goBack}" style="color: var(--primary-color); text-decoration: none; font-size: 0.9rem;">Wrong number?</a>
        </p>
        
        <form @submit="${this.handleSubmit}">
          <div class="input-group">
            <input 
              type="tel" 
              placeholder="••••••" 
              .value="${this.otp}" 
              @input="${this.handleInput}" 
              autocomplete="one-time-code"
              ?disabled="${this.loading}"
            >
            <div class="error">${this.error}</div>
          </div>
          
          <button type="submit" ?disabled="${this.otp.length !== 6 || this.loading}">
            ${this.loading ? 'Verifying...' : 'Verify Code'}
          </button>
        </form>

        <div class="resend">
          Didn't get the code? 
          <button 
            type="button" 
            @click="${this.handleResend}" 
            ?disabled="${this.resendCountdown > 0}"
          >
            ${this.resendCountdown > 0 ? 'Resend in ' + this.resendCountdown + 's' : 'Request New Code'}
          </button>
        </div>
      </div>
    `;
  }
}
