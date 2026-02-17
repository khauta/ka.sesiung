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
  `;

  // Fugu API: Attempt to use the native File System Access API for a better "Save" experience
  private async handleDownload(artifact: Artifact) {
    if ('showSaveFilePicker' in window) {
      try {
        // Pseudo-code for fetching the blob and saving via Fugu
        // In a real app, you would fetch(artifact.url) -> blob
        // For now, we simulate with a dummy blob or alert
        // const response = await fetch(artifact.url);
        // const blob = await response.blob();

        const handle = await (window as any).showSaveFilePicker({
          suggestedName: artifact.name,
        });
        const writable = await handle.createWritable();
        // await writable.write(blob); 
        await writable.write("Dummy content"); // Mock content for this demo
        await writable.close();
      } catch (err) {
        console.warn('Save cancelled or failed, falling back to standard download target="_blank"', err);
        window.open(artifact.url, '_blank');
      }
    } else {
      // Fallback for Safari / older mobile browsers
      window.open(artifact.url, '_blank');
    }
  }

  render() {
    const vaultItems = this.items.filter(i => i.category === 'vault' || i.artifacts.length > 0);

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
            ${vaultItems.flatMap(item => item.artifacts.map(artifact => html`
              <tr>
                <td>
                  <strong>${artifact.name}</strong><br/>
                  <small style="color: gray;">From: ${item.title}</small>
                </td>
                <td>${new Date(item.lastModified).toLocaleDateString()}</td>
                <td>
                  <button 
                    class="download-btn"
                    @click="${() => this.handleDownload(artifact)}"
                    aria-label="Download ${artifact.name}">
                    Download
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
