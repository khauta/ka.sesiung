import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';

@customElement('profile-expander')
export class ProfileExpander extends LitElement {
    @state() isExpanded = false;
    @state() userData = { name: 'Client', tier: 'Gold', email: 'client@example.com', avatar: '' };

    static styles = css`
    :host { display: block; }
    .profile-container {
        position: relative;
        width: 100%;
    }
    .avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        overflow: hidden;
        cursor: pointer;
        background: #eee;
        border: 2px solid transparent;
        transition: border-color 0.2s;
    }
    .avatar:hover {
        border-color: #6200ee;
    }
    .avatar img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .details { 
        max-height: 0; 
        opacity: 0; 
        overflow: hidden;
        transition: all 0.3s ease;
        background: white;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        position: absolute;
        top: 50px;
        right: 0;
        width: 250px;
        z-index: 100;
    }
    .details.open { 
        max-height: 200px; 
        opacity: 1; 
        padding: 16px; 
    }
    h3 { margin: 0 0 4px 0; font-size: 1rem; }
    p { margin: 4px 0; font-size: 0.9rem; color: #666; }
    .badge {
        display: inline-block;
        font-size: 0.75rem;
        padding: 2px 8px;
        background: #ffd700;
        color: #333;
        border-radius: 10px;
        font-weight: bold;
        margin-bottom: 8px;
    }
    small { display: block; margin-top: 8px; color: #999; font-size: 0.75rem; }
  `;

    render() {
        return html`
      <div class="profile-container">
        <div class="avatar" @click="${() => this.isExpanded = !this.isExpanded}">
           <img src="${this.userData.avatar || 'https://ui-avatars.com/api/?name=Client&background=random'}" alt="Profile" />
        </div>

        <div class="details ${this.isExpanded ? 'open' : ''}">
           <h3>${this.userData.name}</h3>
           <span class="badge">${this.userData.tier}</span>
           <p>${this.userData.email}</p>
           <small>ID: 883-221</small> 
        </div>
      </div>
    `;
    }
}
