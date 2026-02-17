import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ResourceItem } from '../models/ResourceState';

@customElement('view-tracker')
export class ViewTracker extends LitElement {
  @property({ type: Array }) items: ResourceItem[] = [];

  static styles = css`
    /* CSS omitted for brevity, assumes standard list styling */
    :host { display: block; padding: 16px; }
    h2 { font-weight: 300; margin-bottom: 24px; color: #444; }
    .list { display: flex; flex-direction: column; gap: 24px; }
    .tracker-item { background: white; padding: 16px; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
    .progress-track { background: #e0e0e0; border-radius: 8px; height: 12px; width: 100%; overflow: hidden; margin-top: 8px; }
    .progress-fill { background: var(--primary-color, #6200ea); height: 100%; transition: width 0.4s ease; }
    .visually-hidden { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0; }
  `;

  render() {
    const trackerItems = this.items.filter(i => i.category === 'tracker' || i.category === 'hub'); // Often we want to track hub items too

    return html`
      <section aria-labelledby="tracker-heading">
        <h2 id="tracker-heading">Project Progress</h2>
        <div class="list">
          ${trackerItems.length === 0 ? html`<p>No active projects to track.</p>` : ''}
          ${trackerItems.map(item => html`
            <div class="tracker-item">
              <div style="display: flex; justify-content: space-between;">
                <strong>${item.title}</strong>
                <span>${item.statusPercent}%</span>
              </div>
              <div class="progress-track" aria-hidden="true">
                <div class="progress-fill" style="width: ${item.statusPercent}%;"></div>
              </div>
              <span class="visually-hidden" role="progressbar" aria-valuenow="${item.statusPercent}" aria-valuemin="0" aria-valuemax="100">
                ${item.title} is ${item.statusPercent} percent complete. Status: ${item.statusLabel}
              </span>
              <p style="font-size: 0.85rem; color: #555; margin-top: 4px;">Status: ${item.statusLabel}</p>
            </div>
          `)}
        </div>
      </section>
    `;
  }
}
