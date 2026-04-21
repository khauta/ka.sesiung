import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { router } from '../router/index';

@customElement('view-signup')
export class ViewSignup extends LitElement {
  @state() private name = '';
  @state() private phone = '';
  @state() private password = '';
  @state() private confirmPassword = '';
  @state() private errors: Record<string, string> = {};

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
    button:hover {
      background: #3700b3;
    }
    button:disabled {
      background: #ccc;
      cursor: not-allowed;
    }
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
    .footer a:hover {
      text-decoration: underline;
    }
  `;

  private handlePhoneInput(e: Event) {
    const target = e.target as HTMLInputElement;
    const val = target.value.replace(/\\D/g, '');
    if (val.length <= 8) {
      this.phone = val;
      target.value = val;
    } else {
      target.value = this.phone;
    }
    this.validate();
  }

  private handleInput(field: 'name' | 'password' | 'confirmPassword') {
    return (e: Event) => {
      this[field] = (e.target as HTMLInputElement).value;
      this.validate();
    };
  }

  private validate() {
    const newErrors: Record<string, string> = {};
    
    if (this.name && this.name.length < 2) newErrors.name = 'Name must be at least 2 characters.';
    
    if (this.phone && this.phone.length !== 8) newErrors.phone = 'Phone number must be exactly 8 digits.';
    
    if (this.password) {
      if (this.password.length < 8) newErrors.password = 'Password must be at least 8 characters.';
      else if (!/\\d/.test(this.password)) newErrors.password = 'Password must contain a number.';
      else if (!/[A-Z]/.test(this.password)) newErrors.password = 'Password must contain an uppercase letter.';
    }

    if (this.confirmPassword && this.password !== this.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }

    this.errors = newErrors;
  }

  private get isFormValid() {
    return this.name.length >= 2 &&
           this.phone.length === 8 &&
           this.password.length >= 8 &&
           /\\d/.test(this.password) &&
           /[A-Z]/.test(this.password) &&
           this.password === this.confirmPassword;
  }

  private handleSubmit(e: Event) {
    e.preventDefault();
    if (this.isFormValid) {
      // Setup successful, move to OTP phone verification
      router.navigate('app://otp');
    }
  }

  private navToLogin(e: Event) {
    e.preventDefault();
    router.navigate('app://login');
  }

  render() {
    return html`
      <div class="card">
        <h2>Create Account</h2>
        <p style="color: #666; margin-bottom: 24px; text-align: center;">Join Ka Sesiung today!</p>
        
        <form @submit="${this.handleSubmit}">
          <div class="input-group">
            <label for="name">Full Name</label>
            <input 
              id="name" 
              type="text" 
              placeholder="John Doe" 
              .value="${this.name}" 
              @input="${this.handleInput('name')}" 
            >
            <div class="error">${this.errors.name || ''}</div>
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
              >
            </div>
            <div class="error">${this.errors.phone || ''}</div>
          </div>
          
          <div class="input-group">
            <label for="password">Password</label>
            <input 
              id="password" 
              type="password" 
              placeholder="••••••••" 
              .value="${this.password}" 
              @input="${this.handleInput('password')}" 
            >
            <div class="error">${this.errors.password || ''}</div>
          </div>

          <div class="input-group">
            <label for="confirm">Confirm Password</label>
            <input 
              id="confirm" 
              type="password" 
              placeholder="••••••••" 
              .value="${this.confirmPassword}" 
              @input="${this.handleInput('confirmPassword')}" 
            >
            <div class="error">${this.errors.confirmPassword || ''}</div>
          </div>
          
          <button type="submit" ?disabled="${!this.isFormValid}">
            Sign Up
          </button>
        </form>

        <div class="footer">
          Already have an account? <a @click="${this.navToLogin}">Log In</a>
        </div>
      </div>
    `;
  }
}
