import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { router } from '../router/index';
import './core-viewport';

// Icons (Simple SVGs for now)
const icons = {
    menu: html`<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>`,
    hub: html`<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>`,
    tracker: html`<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>`,
    vault: html`<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M20 6h-8l-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"/></svg>`
};

@customElement('app-shell')
export class AppShell extends LitElement {
    @state() private _drawerOpen = false;
    @state() private _currentView = 'hub';

    static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      height: 100vh;
      overflow: hidden;
      background: #f5f5f5;
      color: #333;
    }

    header {
      display: flex;
      align-items: center;
      padding: 0 16px;
      height: 64px;
      background: #fff;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      z-index: 10;
    }

    .menu-btn {
      background: none;
      border: none;
      cursor: pointer;
      padding: 8px;
      margin-right: 16px;
      border-radius: 50%;
    }
    .menu-btn:hover { background: rgba(0,0,0,0.05); }

    h1 {
      flex: 1;
      font-size: 1.25rem;
      margin: 0;
      font-weight: 500;
    }

    .user-badge {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: #6200ee;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: 0.9rem;
      cursor: pointer;
    }

    .main-container {
      display: flex;
      flex: 1;
      overflow: hidden;
      position: relative;
    }

    nav {
      width: 256px;
      background: #fff;
      border-right: 1px solid #e0e0e0;
      display: flex;
      flex-direction: column;
      transition: transform 0.3s ease;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      z-index: 5;
      transform: translateX(-100%);
    }

    nav.open {
      transform: translateX(0);
      box-shadow: 2px 0 8px rgba(0,0,0,0.1);
    }
    
    @media (min-width: 768px) {
      nav {
        position: relative;
        transform: translateX(0);
      }
      .menu-btn { display: none; }
    }

    .nav-item {
      display: flex;
      align-items: center;
      padding: 16px 24px;
      text-decoration: none;
      color: #555;
      font-weight: 500;
      cursor: pointer;
    }
    
    .nav-item:hover { background: #f0f0f0; }
    .nav-item.active {
      color: #6200ee;
      background: #f5f5ff;
    }
    
    .nav-item svg { margin-right: 12px; }

    core-viewport {
      flex: 1;
      overflow: hidden;
    }

    /* Scrim for mobile drawer */
    .scrim {
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(0,0,0,0.5);
      z-index: 4;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.3s;
    }
    .scrim.open {
      opacity: 1;
      pointer-events: auto;
    }
    @media (min-width: 768px) { .scrim { display: none; } }
  `;

    connectedCallback() {
        super.connectedCallback();
        router.addEventListener('route-changed', (e: Event) => {
            this._currentView = (e as CustomEvent).detail.view;
            this._drawerOpen = false; // Close drawer on nav on mobile
        });
        router.resolveRoute();
    }

    private _toggleDrawer() {
        this._drawerOpen = !this._drawerOpen;
    }

    private _nav(view: string) {
        router.navigate(`app://${view}`);
    }

    render() {
        return html`
      <header>
        <button class="menu-btn" @click=${this._toggleDrawer} aria-label="Menu">
          ${icons.menu}
        </button>
        <h1>Ka Sesiung</h1>
        <div class="user-badge" title="User Profile">A</div>
      </header>

      <div class="main-container">
        <div class="scrim ${this._drawerOpen ? 'open' : ''}" @click=${this._toggleDrawer}></div>
        
        <nav class="${this._drawerOpen ? 'open' : ''}">
          <a class="nav-item ${this._currentView === 'hub' ? 'active' : ''}" @click=${() => this._nav('hub')}>
            ${icons.hub} My Hub
          </a>
          <a class="nav-item ${this._currentView === 'tracker' ? 'active' : ''}" @click=${() => this._nav('tracker')}>
            ${icons.tracker} Tracker
          </a>
          <a class="nav-item ${this._currentView === 'vault' ? 'active' : ''}" @click=${() => this._nav('vault')}>
            ${icons.vault} Vault
          </a>
        </nav>

        <core-viewport></core-viewport>
      </div>
    `;
    }
}
