import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('splash-screen')
export class SplashScreen extends LitElement {
    @property({ type: Boolean }) visible = true;

    static styles = css`
    :host {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: #ffffff;
      z-index: 9999;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: opacity 0.8s ease-out, visibility 0.8s;
      opacity: 1;
      visibility: visible;
    }
    :host([hidden]) {
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
    }

    .logo-container {
      width: 120px;
      height: 120px;
      animation: pulse 2s infinite ease-in-out;
    }

    svg {
      width: 100%;
      height: 100%;
      fill: #6200ee;
    }

    @keyframes pulse {
      0% { transform: scale(0.95); opacity: 0.8; }
      50% { transform: scale(1.05); opacity: 1; }
      100% { transform: scale(0.95); opacity: 0.8; }
    }

    .loading-bar {
      position: absolute;
      bottom: 20%;
      width: 200px;
      height: 4px;
      background: #f0f0f0;
      border-radius: 2px;
      overflow: hidden;
    }

    .loading-progress {
      height: 100%;
      background: #6200ee;
      width: 0%;
      animation: load 3s ease-out forwards; 
    }

    /* Simulate a loading progress matching the boot time assumption */
    @keyframes load {
      0% { width: 0%; }
      20% { width: 10%; }
      50% { width: 40%; }
      80% { width: 80%; }
      100% { width: 100%; }
    }
  `;

    render() {
        return html`
      <div class="logo-container">
        <!-- Simple geometric logo representing "KS" or stability -->
        <svg viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" stroke="currentColor" stroke-width="5" fill="none" />
          <path d="M35 35 L65 65 M65 35 L35 65" stroke="currentColor" stroke-width="5" stroke-linecap="round" />
        </svg>
      </div>
      <div class="loading-bar">
        <div class="loading-progress"></div>
      </div>
    `;
    }
}
