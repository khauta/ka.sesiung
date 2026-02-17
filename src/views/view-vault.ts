import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { DataService } from '../services/mock-data';
import { Resource } from '../types/index';

@customElement('view-vault')
export class ViewVault extends LitElement {
    @state() private _files: Resource[] = [];
    @state() private _loading = true;

    static styles = css`
    :host { display: block; padding: 16px; }
    h2 { font-weight: 300; margin-bottom: 24px; color: #444; }
    
    .timeline {
      position: relative;
      padding-left: 20px;
      border-left: 2px solid #eee;
    }
    .timeline-item {
      position: relative;
      margin-bottom: 24px;
      padding-left: 16px;
    }
    .timeline-item::before {
      content: '';
      position: absolute;
      left: -27px;
      top: 0;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: #6200ee;
      border: 2px solid white;
    }
    .item-date {
      font-size: 0.8rem;
      color: #888;
      margin-bottom: 4px;
    }
    .item-content {
      background: white;
      padding: 12px;
      border-radius: 8px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .download-btn {
      background: #f0f0f0;
      border: none;
      padding: 8px 12px;
      border-radius: 4px;
      cursor: pointer;
      font-weight: 500;
      color: #333;
      text-decoration: none;
    }
    .download-btn:hover { background: #e0e0e0; }
  `;

    async connectedCallback() {
        super.connectedCallback();
        try {
            const all = await DataService.getResources('user-123');
            this._files = all
                .filter(r => r.type === 'file')
                .sort((a, b) => b.timestamp - a.timestamp);
        } finally {
            this._loading = false;
        }
    }

    private _formatDate(ts: number) {
        return new Date(ts).toLocaleDateString();
    }

    render() {
        if (this._loading) return html`<p>Loading...</p>`;

        return html`
      <h2>Vault</h2>
      <div class="timeline">
        ${this._files.map(f => html`
          <div class="timeline-item">
            <div class="item-date">${this._formatDate(f.timestamp)}</div>
            <div class="item-content">
              <span>${f.title}</span>
              <a href="${f.downloadUrl}" class="download-btn" download>Download</a>
            </div>
          </div>
        `)}
      </div>
    `;
    }
}
