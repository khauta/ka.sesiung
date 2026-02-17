import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { router } from '../router/index';

// Import views (will create these next)
import '../views/view-hub';
import '../views/view-tracker';
import '../views/view-vault';

@customElement('core-viewport')
export class CoreViewport extends LitElement {
    @property({ type: String }) currentView = 'hub';
    @state() private _offlineMode = false;

    static styles = css`
    :host { display: block; height: 100%; overflow-y: auto; contain: content; }
    .content-wrapper { padding: 16px; max-width: 1200px; margin: 0 auto; }
    .offline-badge {
      background: #ffc107;
      color: #000;
      text-align: center;
      padding: 4px;
      font-size: 0.8rem;
    }
  `;

    connectedCallback() {
        super.connectedCallback();
        window.addEventListener('offline', () => this._offlineMode = true);
        window.addEventListener('online', () => this._offlineMode = false);

        // Subscribe to router events
        router.addEventListener('route-changed', (e: Event) => {
            this.currentView = (e as CustomEvent).detail.view;
        });

        // Initial resolution
        router.resolveRoute();
    }

    render() {
        return html`
      <main class="content-wrapper">
        ${this._offlineMode ? html`<div class="offline-badge">Offline Mode</div>` : ''}
        ${this.renderDynamicView()}
      </main>
    `;
    }

    private renderDynamicView() {
        switch (this.currentView) {
            case 'hub': return html`<view-hub></view-hub>`;
            case 'tracker': return html`<view-tracker></view-tracker>`;
            case 'vault': return html`<view-vault></view-vault>`;
            default: return html`<div>Page Not Found</div>`;
        }
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'core-viewport': CoreViewport
    }
}
