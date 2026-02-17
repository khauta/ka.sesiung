import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { DataService } from '../services/mock-data';
import { Resource } from '../types/index';

@customElement('view-tracker')
export class ViewTracker extends LitElement {
    @state() private _projects: Resource[] = [];
    @state() private _loading = true;

    static styles = css`
    :host { display: block; padding: 16px; }
    h2 { font-weight: 300; margin-bottom: 24px; color: #444; }
    .project-item {
      background: white;
      padding: 16px;
      margin-bottom: 12px;
      border-radius: 8px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    }
    .header { display: flex; justify-content: space-between; margin-bottom: 8px; }
    .progress-container {
      height: 8px;
      background: #eee;
      border-radius: 4px;
      overflow: hidden;
      margin-top: 8px;
    }
    .bar {
      height: 100%;
      background: #6200ee;
      transition: width 0.3s ease;
    }
  `;

    async connectedCallback() {
        super.connectedCallback();
        try {
            const all = await DataService.getResources('user-123');
            this._projects = all.filter(r => r.type === 'project');
        } finally {
            this._loading = false;
        }
    }

    render() {
        if (this._loading) return html`<p>Loading...</p>`;

        return html`
      <h2>Project Tracker</h2>
      ${this._projects.length === 0 ? html`<p>No active projects.</p>` : ''}
      ${this._projects.map(p => html`
        <div class="project-item">
          <div class="header">
            <strong>${p.title}</strong>
            <span>${p.progress}%</span>
          </div>
          <div class="status">${p.status}</div>
          <div class="progress-container">
            <div class="bar" style="width: ${p.progress}%"></div>
          </div>
        </div>
      `)}
    `;
    }
}
