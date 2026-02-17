import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ResourceItem } from '../models/ResourceState';

@customElement('view-hub')
export class ViewHub extends LitElement {
    @property({ type: Array }) items: ResourceItem[] = [];

    static styles = css`
    .grid { display: grid; gap: 16px; grid-template-columns: 1fr; }
    .card { background: var(--surface-color, #fff); border-radius: 12px; padding: 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
    .badge-pro { background: gold; color: #000; padding: 2px 8px; border-radius: 12px; font-size: 0.8rem; font-weight: bold; }
    @media (min-width: 768px) { .grid { grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); } }
  `;

    render() {
        const hubItems = this.items.filter(i => i.category === 'hub');

        return html`
      <section aria-labelledby="hub-heading">
        <h2 id="hub-heading">My Active Services</h2>
        <div class="grid">
          ${hubItems.map(item => html`
            <article class="card" tabindex="0">
              <header style="display: flex; justify-content: space-between;">
                <h3>${item.title}</h3>
                ${item.isPremium ? html`<span class="badge-pro" aria-label="Premium Service">PRO</span>` : ''}
              </header>
              <p>${item.description}</p>
              <footer style="margin-top: 12px; font-size: 0.9rem; color: gray;">
                <strong>Est. Delivery:</strong> ${item.deliveryDate ? new Date(item.deliveryDate).toLocaleDateString() : 'TBD'}
              </footer>
            </article>
          `)}
        </div>
      </section>
    `;
    }
}
