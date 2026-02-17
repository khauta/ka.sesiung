import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Resource } from '../types/index';

@customElement('service-card-list')
export class ServiceCardList extends LitElement {
    @property({ type: Array }) services: Resource[] = [];

    static styles = css`
    :host { display: grid; gap: 16px; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); }
    .card {
      background: white;
      border-radius: 12px;
      padding: 20px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.05);
      border: 1px solid #eee;
      display: flex;
      flex-direction: column;
    }
    .card.premium { border-left: 4px solid #6200ee; }
    .header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px; }
    h3 { margin: 0; font-size: 1.1rem; color: #333; }
    .badge { 
      font-size: 0.75rem; padding: 4px 8px; border-radius: 12px; background: #f0f0f0; color: #666; font-weight: 600; text-transform: uppercase;
    }
    .badge.premium { background: #e8dbff; color: #6200ee; }
    .date { font-size: 0.85rem; color: #666; margin-top: auto; pt-4; }
  `;

    render() {
        if (!this.services.length) return html`<p>No active services.</p>`;

        return html`
      ${this.services.map(service => html`
        <div class="card ${service.meta?.tier || ''}">
          <div class="header">
            <h3>${service.title}</h3>
            <span class="badge ${service.meta?.tier || ''}">${service.meta?.tier || 'Standard'}</span>
          </div>
          <div class="status">Status: <strong>${service.status}</strong></div>
          ${service.nextDeliveryDate ? html`<div class="date">Next: ${service.nextDeliveryDate}</div>` : ''}
        </div>
      `)}
    `;
    }
}
