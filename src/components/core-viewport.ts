import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { router } from '../router/index';
import { auth, subscribeToUserResources } from '../services/firebase';
import { onAuthStateChanged } from 'firebase/auth';

import '../views/view-hub';
import '../views/view-tracker';
import '../views/view-vault';
import '../views/view-login';
import '../views/view-otp';
import '../views/view-signup';

@customElement('core-viewport')
export class CoreViewport extends LitElement {
  @state() private _currentView = 'hub';
  @state() private _resources: any[] = [];
  @state() private _loading = true;
  
  private unsubscribeResources: (() => void) | null = null;
  private unsubscribeAuth: (() => void) | null = null;

  static styles = css`
    :host {
      display: block;
      height: 100%;
      overflow-y: auto;
      padding: 16px;
      box-sizing: border-box;
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    router.addEventListener('route-changed', (e: Event) => {
      this._currentView = (e as CustomEvent).detail.view;
      this.requestUpdate();
    });
    
    // Listen to Firebase Auth state
    this.unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      if (user && user.phoneNumber) {
        // Safe E.164 number format encoding/mapping if needed, but phoneAuth sets it
        const phone = user.phoneNumber;
        
        // Unsubscribe from previous if existed
        if (this.unsubscribeResources) {
          this.unsubscribeResources();
        }
        
        this.unsubscribeResources = subscribeToUserResources(phone, (data) => {
          this._resources = data;
          this._loading = false;
          this.requestUpdate();
        });
      } else {
        // User logged out
        this._resources = [];
        this._loading = false;
        if (this.unsubscribeResources) {
          this.unsubscribeResources();
          this.unsubscribeResources = null;
        }
        // Force them to login if trying to access secure routes
        if (!['login', 'otp', 'signup'].includes(this._currentView)) {
          router.navigate('app://login');
        }
      }
    });

    router.resolveRoute();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.unsubscribeAuth) this.unsubscribeAuth();
    if (this.unsubscribeResources) this.unsubscribeResources();
  }

  private renderDynamicView() {
    if (this._loading && !['login', 'otp', 'signup'].includes(this._currentView)) {
      return html`<p>Loading your workspace...</p>`;
    }
    
    switch (this._currentView) {
      case 'hub': return html`<view-hub .items="${this._resources}"></view-hub>`;
      case 'tracker': return html`<view-tracker .items="${this._resources}"></view-tracker>`;
      case 'vault': return html`<view-vault .items="${this._resources}"></view-vault>`;
      case 'login': return html`<view-login></view-login>`;
      case 'otp': return html`<view-otp></view-otp>`;
      case 'signup': return html`<view-signup></view-signup>`;
      default: return html`<p>Page not found</p>`;
    }
  }

  render() {
    return html`
      ${this.renderDynamicView()}
    `;
  }
}
