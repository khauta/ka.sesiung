import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { router } from '../router/index';
import { authService, PENDING_PHONE_KEY } from '../services/auth';

@customElement('view-login')
export class ViewLogin extends LitElement {
  @state() private phone = '';
  @state() private error = '';
  @state() private loading = false;

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
    }
    .phone-input {
      display: flex;
      align-items: center;
      border: 1px solid #ccc;
      border-radius: 8px;
      overflow: hidden;
    }
    .prefix {
      background: #f0f0f0;
      padding: 12px;
      color: #555;
      font-weight: 500;
      border-right: 1px solid #ccc;
    }
    input {
      flex: 1;
      padding: 12px;
      border: none;
      outline: none;
      font-size: 1rem;
    }
    input:focus { background: #fafafa; }
    .error {
      color: #d32f2f;
      font-size: 0.85rem;
      margin-top: 4px;
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
    .footer { margin-top: 24px; font-size: 0.9rem; color: #666; }
    .footer a {
      color: var(--primary-color, #6200ee);
      text-decoration: none;
      font-weight: 500;
      cursor: pointer;
    }
    .footer a:hover { text-decoration: underline; }
  `;

  private handleInput(e: Event) {
    const target = e.target as HTMLInputElement;
    const val = target.value.replace(/\D/g, '');
    if (val.length <= 8) {
      this.phone = val;
      target.value = val;
    } else {
      target.value = this.phone;
    }
    this.error = '';
  }

  private async handleSubmit(e: Event) {
    e.preventDefault();
    if (this.phone.length !== 8) {
      this.error = 'Phone number must be exactly 8 digits.';
      return;
    }

    this.loading = true;
    this.error = '';

    const phoneNumber = '+266' + this.phone;

    try {
      await authService.requestOtp(phoneNumber);
      // Persist the phone in sessionStorage so view-otp can read it without
      // any global window property exposure.
      sessionStorage.setItem(PENDING_PHONE_KEY, phoneNumber);
      router.navigate('app://otp');
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Failed to send OTP. Try again.';
      this.error = msg;
    } finally {
      this.loading = false;
    }
  }

  private navToSignup(e: Event) {
    e.preventDefault();
    router.navigate('app://signup');
  }

  render() {
    return html`
      <div class="card">
        <h2>Welcome Back</h2>
        <p style="color: #666; margin-bottom: 24px;">Enter your phone number to continue</p>
        
        <form @submit="${this.handleSubmit}">
          <div class="input-group">
            <label for="phone">Phone Number</label>
            <div class="phone-input">
              <span class="prefix">+266</span>
              <input 
                id="phone" 
                type="tel" 
                placeholder="51234567" 
                .value="${this.phone}" 
                @input="${this.handleInput}" 
                autocomplete="tel-local"
                ?disabled="${this.loading}"
              >
            </div>
            <div class="error">${this.error}</div>
          </div>
          
          <button type="submit" ?disabled="${this.phone.length !== 8 || this.loading}">
            ${this.loading ? 'Sending OTP...' : 'Continue'}
          </button>
        </form>

        <div class="footer">
          Don't have an account? <a @click="${this.navToSignup}">Sign Up</a>
        </div>
      </div>
    `;
  }
}

