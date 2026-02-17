import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { router } from '../router/index';
import { mockAppState } from '../data/mockData';
import '../views/view-hub';
import '../views/view-tracker';
import '../views/view-vault';

@customElement('core-viewport')
export class CoreViewport extends LitElement {
  @state() private _currentView = 'hub';
  @state() private appData = mockAppState; // Replace this with Firebase listener later

  static styles = css`
    :host {
      display: block;
      height: 100%;
      overflow-y: auto;
      padding: 16px;
      box-sizing: border-box;
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    router.addEventListener('route-changed', (e: Event) => {
      this._currentView = (e as CustomEvent).detail.view;
      this.requestUpdate();
    });
  }

  private renderDynamicView() {
    switch (this._currentView) {
      case 'hub': return html`<view-hub .items="${this.appData.resources}"></view-hub>`;
      case 'tracker': return html`<view-tracker .items="${this.appData.resources}"></view-tracker>`;
      case 'vault': return html`<view-vault .items="${this.appData.resources}"></view-vault>`;
      default: return html`<p>Page not found</p>`;
    }
  }

  render() {
    return html`
      ${this.renderDynamicView()}
    `;
  }
}
