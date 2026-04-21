import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ResourceItem, Artifact } from '../models/ResourceState';

@customElement('view-vault')
export class ViewVault extends LitElement {
  @property({ type: Array }) items: ResourceItem[] = [];

  static styles = css`
    :host { display: block; padding: 16px; }
    h2 { font-weight: 300; margin-bottom: 24px; color: #444; }
    table { width: 100%; border-collapse: collapse; text-align: left; }
    th { padding: 12px 8px; border-bottom: 2px solid #ccc; font-weight: 600; }
    td { padding: 12px 8px; border-bottom: 1px solid #eee; }
    .download-btn {
      background: transparent;
      border: 1px solid #6200ea;
      color: #6200ea;
      padding: 6px 12px;
      border-radius: 4px;
      cursor: pointer;
      font-weight: 500;
      transition: all 0.2s;
    }
    .download-btn:hover { background: #6200ea; color: white; }
    .empty-state { text-align: center; padding: 40px; color: #777; }
  `;

  private handleDownload(artifact: Artifact) {
    if (artifact.url) {
      window.open(artifact.url, '_blank');
    } else {
      console.warn('No URL found for this artifact', artifact);
    }
  }

  render() {
    const vaultItems = this.items.filter(i => i.category === 'vault' || (i.artifacts && i.artifacts.length > 0));

    if (vaultItems.length === 0) {
      return html`
        <section aria-labelledby="vault-heading">
          <h2 id="vault-heading">My Secure Vault</h2>
          <div class="empty-state">
            <p>You don't have any final documents yet.</p>
          </div>
        </section>
      `;
    }

    return html`
      <section aria-labelledby="vault-heading">
        <h2 id="vault-heading">My Secure Vault</h2>
        <p style="font-size: 0.9rem; margin-bottom: 16px;">Download history, invoices, and completed assets.</p>
        
        <table role="grid">
          <thead>
            <tr>
              <th scope="col">Asset Name</th>
              <th scope="col">Date</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            ${vaultItems.flatMap(item => (item.artifacts || []).map(artifact => html`
              <tr>
                <td>
                  <strong>${artifact.name || 'Document'}</strong><br/>
                  <small style="color: gray;">From: ${item.title || 'Unknown Project'}</small>
                </td>
                <td>${item.updatedAt ? new Date(item.updatedAt).toLocaleDateString() : 'N/A'}</td>
                <td>
                  <button 
                    class="download-btn"
                    @click="${() => this.handleDownload(artifact)}"
                    aria-label="View ${artifact.name || 'Document'}">
                    View Document
                  </button>
                </td>
              </tr>
            `))}
          </tbody>
        </table>
      </section>
    `;
  }
}
