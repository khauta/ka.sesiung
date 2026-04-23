import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { ClientDocument, Artifact, ResourceItem } from '../models/ResourceState';
import type { UserRole } from '../types/index';

interface DownloadEntry {
  id: string;
  name: string;
  fileName: string;
  category: string;
  updatedAt: string;
  source: string;
  downloadUrl: string;
  accessLevel?: string;
}

@customElement('view-vault')
export class ViewVault extends LitElement {
  @property({ type: Array }) items: ResourceItem[] = [];
  @property({ type: Array }) documents: ClientDocument[] = [];
  @property({ type: String }) userRole: UserRole = 'viewer';

  static styles = css`
    :host { display: block; padding: 16px; }
    h2 { font-weight: 300; margin-bottom: 24px; color: #444; }
    table { width: 100%; border-collapse: collapse; text-align: left; }
    th { padding: 12px 8px; border-bottom: 2px solid #ccc; font-weight: 600; }
    td { padding: 12px 8px; border-bottom: 1px solid #eee; vertical-align: top; }
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
    .meta { color: gray; font-size: 0.8rem; }
  `;

  private canAccessLevel(accessLevel?: string) {
    switch (accessLevel) {
      case 'admin':
      case 'owner':
        return this.userRole === 'owner' || this.userRole === 'admin';
      case 'manager':
        return ['owner', 'admin', 'manager'].includes(this.userRole);
      case 'premium':
      case 'all':
      case undefined:
        return true;
      default:
        return true;
    }
  }

  private handleDownload(entry: DownloadEntry) {
    if (!entry.downloadUrl) {
      console.warn('No download URL found for this entry', entry);
      return;
    }

    const link = document.createElement('a');
    link.href = entry.downloadUrl;
    link.download = entry.fileName;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.append(link);
    link.click();
    link.remove();
  }

  private resourceEntries(): DownloadEntry[] {
    return this.items
      .filter((item) => item.category === 'vault' || item.resources.length > 0 || item.artifacts.length > 0)
      .flatMap((item) => {
        const files = item.resources.length ? item.resources : item.artifacts;
        return files
          .filter((artifact) => this.canAccessLevel(artifact.accessLevel ?? item.accessLevel))
          .map((artifact: Artifact) => ({
            id: artifact.id,
            name: artifact.name || 'Document',
            fileName: artifact.fileName || artifact.name || 'download',
            category: artifact.category || 'document',
            updatedAt: item.updatedAt || item.lastModified,
            source: item.title || 'Workspace resource',
            downloadUrl: artifact.downloadUrl || artifact.url,
            accessLevel: artifact.accessLevel ?? item.accessLevel,
          }));
      });
  }

  private documentEntries(): DownloadEntry[] {
    return this.documents
      .filter((document) => this.canAccessLevel(document.accessLevel))
      .map((document) => ({
        id: document.id,
        name: document.name,
        fileName: document.fileName,
        category: document.category,
        updatedAt: document.updatedAt || document.uploadedAt,
        source: document.resourceId
          ? this.items.find((item) => item.id === document.resourceId)?.title || 'Linked resource'
          : 'Client documents',
        downloadUrl: document.downloadUrl,
        accessLevel: document.accessLevel,
      }));
  }

  render() {
    const entries = [...this.documentEntries(), ...this.resourceEntries()]
      .sort((left, right) => new Date(right.updatedAt).getTime() - new Date(left.updatedAt).getTime());

    if (entries.length === 0) {
      return html`
        <section aria-labelledby="vault-heading">
          <h2 id="vault-heading">My Secure Vault</h2>
          <div class="empty-state">
            <p>You don't have any documents or downloadable files yet.</p>
          </div>
        </section>
      `;
    }

    return html`
      <section aria-labelledby="vault-heading">
        <h2 id="vault-heading">My Secure Vault</h2>
        <p style="font-size: 0.9rem; margin-bottom: 16px;">Download documents, invoices, proofs of payment, and completed client assets.</p>

        <table role="grid">
          <thead>
            <tr>
              <th scope="col">Asset Name</th>
              <th scope="col">Category</th>
              <th scope="col">Date</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            ${entries.map((entry) => html`
              <tr>
                <td>
                  <strong>${entry.name}</strong><br />
                  <span class="meta">${entry.source}</span>
                </td>
                <td>${entry.category}</td>
                <td>${new Date(entry.updatedAt).toLocaleDateString()}</td>
                <td>
                  <button
                    class="download-btn"
                    @click=${() => this.handleDownload(entry)}
                    aria-label=${`Download ${entry.name}`}>
                    Download
                  </button>
                </td>
              </tr>
            `)}
          </tbody>
        </table>
      </section>
    `;
  }
}
