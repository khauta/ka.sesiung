import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { router } from '../router/index';
import './core-viewport';
import './nav-trigger';
import './profile-expander';
import './splash-screen';

// Icons (Material Icons Font)
const icons = {
  hub: html`<span class="material-icons notranslate">dashboard</span>`,
  tracker: html`<span class="material-icons notranslate">timeline</span>`,
  vault: html`<span class="material-icons notranslate">lock</span>`
};

@customElement('app-shell')
export class AppShell extends LitElement {
  @state() private _drawerOpen = false;
  @state() private _currentView = 'hub';
  @state() private _booting = true;

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      height: 100vh;
      overflow: hidden;
      background: #f5f5f5;
      color: #333;
    }

    /* Required for Material Icons to render within Shadow DOM */
    .material-icons {
      font-family: 'Material Icons';
      font-weight: normal;
      font-style: normal;
      font-size: 24px;
      line-height: 1;
      letter-spacing: normal;
      text-transform: none;
      display: inline-block;
      white-space: nowrap;
      word-wrap: normal;
      direction: ltr;
      -webkit-font-feature-settings: 'liga';
      font-feature-settings: 'liga';
      -webkit-font-smoothing: antialiased;
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

    h1 {
      flex: 1;
      font-size: 1.25rem;
      margin: 0;
      font-weight: 500;
      margin-left: 16px;
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
    
    .nav-item svg, .nav-item .material-icons { margin-right: 12px; }

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

    // Simulate boot sequence / resource loading
    setTimeout(() => {
      this._booting = false;
    }, 3000); // 3s boot
  }

  private _toggleDrawer() {
    this._drawerOpen = !this._drawerOpen;
  }

  private _handleMenuToggle(e: CustomEvent) {
    this._drawerOpen = e.detail.isOpen;
  }

  private _nav(view: string) {
    router.navigate(`app://${view}`);
  }

  render() {
    return html`
      <splash-screen ?hidden=${!this._booting}></splash-screen>

      <header>
        <nav-trigger .isOpen=${this._drawerOpen} @menu-toggle=${this._handleMenuToggle}></nav-trigger>
        <h1>Ka Sesiung</h1>
        <profile-expander></profile-expander>
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
