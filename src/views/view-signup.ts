import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { router } from '../router/index';
import { authService, PENDING_PHONE_KEY } from '../services/auth';

/**
 * view-signup — Account access request screen.
 *
 * Ka Sesiung operates a pre-registered client model: accounts are provisioned
 * by an administrator via the Google Sheet + OTP server sync pipeline.
 * This screen lets a registered client verify their phone via OTP to gain
 * first-time access. If their number is not in the allowlist the OTP server
 * will reject the request with a clear error message.
 */
@customElement('view-signup')
export class ViewSignup extends LitElement {
  @state() private name = '';
  @state() private phone = '';
  @state() private error = '';
  @state() private loading = false;
  @state() private nameError = '';
  @state() private phoneError = '';

  static styles = css`
    :host {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      padding: 16px;
      box-sizing: border-box;
      overflow-y: auto;
    }
    .card {
      background: var(--surface-color, #fff);
      border-radius: 12px;
      padding: 32px;
      width: 100%;
      max-width: 400px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      margin: auto;
    }
    h2 {
      margin-top: 0;
      color: #333;
      text-align: center;
    }
    .info {
      font-size: 0.85rem;
      color: #888;
      text-align: center;
      margin-bottom: 24px;
      line-height: 1.5;
    }
    .input-group {
      display: flex;
      flex-direction: column;
      margin-bottom: 16px;
    }
    .input-group label {
      font-size: 0.9rem;
      margin-bottom: 6px;
      color: #555;
    }
    input {
      padding: 12px;
      border: 1px solid #ccc;
      border-radius: 8px;
      outline: none;
      font-size: 1rem;
    }
    input:focus {
      border-color: var(--primary-color, #6200ee);
      background: #fafafa;
    }
    .phone-input {
      display: flex;
      align-items: stretch;
      border: 1px solid #ccc;
      border-radius: 8px;
      overflow: hidden;
    }
    .phone-input:focus-within {
      border-color: var(--primary-color, #6200ee);
    }
    .prefix {
      background: #f0f0f0;
      padding: 12px;
      color: #555;
      font-weight: 500;
      border-right: 1px solid #ccc;
      display: flex;
      align-items: center;
    }
    .phone-input input {
      border: none;
      border-radius: 0;
      flex: 1;
    }
    .error {
      color: #d32f2f;
      font-size: 0.8rem;
      margin-top: 4px;
      min-height: 16px;
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
      margin-top: 8px;
    }
    button:hover { background: #3700b3; }
    button:disabled { background: #ccc; cursor: not-allowed; }
    .footer {
      margin-top: 24px;
      font-size: 0.9rem;
      color: #666;
      text-align: center;
    }
    .footer a {
      color: var(--primary-color, #6200ee);
      text-decoration: none;
      font-weight: 500;
      cursor: pointer;
    }
    .footer a:hover { text-decoration: underline; }
  `;

  private handleNameInput(e: Event) {
    this.name = (e.target as HTMLInputElement).value;
    this.nameError = this.name.length > 0 && this.name.length < 2
      ? 'Name must be at least 2 characters.'
      : '';
    this.error = '';
  }

  private handlePhoneInput(e: Event) {
    const target = e.target as HTMLInputElement;
    const val = target.value.replace(/\D/g, '');
    if (val.length <= 8) {
      this.phone = val;
      target.value = val;
    } else {
      target.value = this.phone;
    }
    this.phoneError = this.phone.length > 0 && this.phone.length !== 8
      ? 'Phone number must be exactly 8 digits.'
      : '';
    this.error = '';
  }

  private get isFormValid() {
    return this.name.length >= 2 && this.phone.length === 8;
  }

  private async handleSubmit(e: Event) {
    e.preventDefault();
    if (!this.isFormValid) return;

    this.loading = true;
    this.error = '';

    const phoneNumber = '+266' + this.phone;

    try {
      await authService.requestOtp(phoneNumber);
      sessionStorage.setItem(PENDING_PHONE_KEY, phoneNumber);
      router.navigate('app://otp');
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Failed to send OTP. Try again.';
      this.error = msg;
    } finally {
      this.loading = false;
    }
  }

  private navToLogin(e: Event) {
    e.preventDefault();
    router.navigate('app://login');
  }

  render() {
    return html`
      <div class="card">
        <h2>Access Your Workspace</h2>
        <p class="info">
          Accounts are provisioned by your workspace administrator.<br>
          If your number is registered, enter it below to receive your access code.
        </p>
        
        <form @submit="${this.handleSubmit}">
          <div class="input-group">
            <label for="name">Full Name</label>
            <input 
              id="name" 
              type="text" 
              placeholder="John Doe" 
              .value="${this.name}" 
              @input="${this.handleNameInput}"
              ?disabled="${this.loading}"
            >
            <div class="error">${this.nameError}</div>
          </div>

          <div class="input-group">
            <label for="phone">Phone Number</label>
            <div class="phone-input">
              <span class="prefix">+266</span>
              <input 
                id="phone" 
                type="tel" 
                placeholder="51234567" 
                .value="${this.phone}" 
                @input="${this.handlePhoneInput}"
                ?disabled="${this.loading}"
              >
            </div>
            <div class="error">${this.phoneError}</div>
          </div>

          <div class="error" style="margin-bottom: 8px;">${this.error}</div>
          
          <button type="submit" ?disabled="${!this.isFormValid || this.loading}">
            ${this.loading ? 'Sending Code...' : 'Send Access Code'}
          </button>
        </form>

        <div class="footer">
          Already have access? <a @click="${this.navToLogin}">Log In</a>
        </div>
      </div>
    `;
  }
}

