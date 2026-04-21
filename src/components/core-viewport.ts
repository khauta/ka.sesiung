import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { router } from '../router/index';
import { authService, ClientInfo } from '../services/auth';
import { subscribeToUserResources } from '../services/firebase';

import '../views/view-hub';
import '../views/view-tracker';
import '../views/view-vault';
import '../views/view-login';
import '../views/view-otp';
import '../views/view-signup';

const AUTH_ROUTES = ['login', 'otp', 'signup'];

@customElement('core-viewport')
export class CoreViewport extends LitElement {
  @state() private _currentView = 'hub';
  @state() private _resources: Record<string, unknown>[] = [];
  @state() private _loading = true;

  private _unsubscribeResources: (() => void) | null = null;
  private _authHandler!: (e: Event) => void;

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
      this._currentView = (e as CustomEvent<{ view: string }>).detail.view;
      this.requestUpdate();
    });

    // Replace Firebase onAuthStateChanged: subscribe to our auth service events.
    this._authHandler = (e: Event) => {
      this._onAuthChanged((e as CustomEvent<{ user: ClientInfo | null }>).detail.user);
    };
    authService.addEventListener('auth-changed', this._authHandler);

    // Immediately evaluate the current (possibly restored) auth state on mount,
    // mirroring the synchronous first-emit behaviour of onAuthStateChanged.
    this._onAuthChanged(authService.getUser());

    router.resolveRoute();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    authService.removeEventListener('auth-changed', this._authHandler);
    this._teardownResourceSub();
  }

  // ── Auth state handler ───────────────────────────────────────────────────

  private _onAuthChanged(user: ClientInfo | null) {
    if (user?.phone) {
      // Tear down any previous subscription before opening a new one.
      this._teardownResourceSub();
      this._loading = true;
      this._unsubscribeResources = subscribeToUserResources(user.phone, (data) => {
        this._resources = data;
        this._loading = false;
        this.requestUpdate();
      });
    } else {
      // Signed out — clear data and redirect if on a protected route.
      this._resources = [];
      this._loading = false;
      this._teardownResourceSub();
      if (!AUTH_ROUTES.includes(this._currentView)) {
        router.navigate('app://login');
      }
    }
  }

  private _teardownResourceSub() {
    if (this._unsubscribeResources) {
      this._unsubscribeResources();
      this._unsubscribeResources = null;
    }
  }

  // ── Rendering ────────────────────────────────────────────────────────────

  private renderDynamicView() {
    if (this._loading && !AUTH_ROUTES.includes(this._currentView)) {
      return html`<p>Loading your workspace...</p>`;
    }

    switch (this._currentView) {
      case 'hub':     return html`<view-hub .items="${this._resources}"></view-hub>`;
      case 'tracker': return html`<view-tracker .items="${this._resources}"></view-tracker>`;
      case 'vault':   return html`<view-vault .items="${this._resources}"></view-vault>`;
      case 'login':   return html`<view-login></view-login>`;
      case 'otp':     return html`<view-otp></view-otp>`;
      case 'signup':  return html`<view-signup></view-signup>`;
      default:        return html`<p>Page not found</p>`;
    }
  }

  render() {
    return html`${this.renderDynamicView()}`;
  }
}

