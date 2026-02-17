import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { DataService } from '../services/mock-data';
import { Resource } from '../types/index';
import '../components/service-card-list';

@customElement('view-hub')
export class ViewHub extends LitElement {
    @state() private _services: Resource[] = [];
    @state() private _loading = true;

    static styles = css`
    :host { display: block; padding: 16px; }
    h2 { font-weight: 300; margin-bottom: 24px; color: #444; }
  `;

    async connectedCallback() {
        super.connectedCallback();
        try {
            const all = await DataService.getResources('user-123');
            this._services = all.filter(r => r.type === 'service');
        } finally {
            this._loading = false;
        }
    }

    render() {
        if (this._loading) return html`<p>Loading...</p>`;

        return html`
      <h2>My Hub</h2>
      <service-card-list .services=${this._services}></service-card-list>
    `;
    }
}
