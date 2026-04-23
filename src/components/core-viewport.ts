import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { router } from '../router/index';
import { authService, ClientInfo } from '../services/auth';
import {
  fetchWorkspaceUser,
  subscribeToClientDocuments,
  subscribeToClientResources,
} from '../services/firebase';
import type { ClientDocument, ResourceItem } from '../models/ResourceState';
import type { WorkspaceUser } from '../types/index';

import '../views/view-hub';
import '../views/view-tracker';
import '../views/view-vault';
import '../views/view-login';
import '../views/view-otp';
import '../views/view-signup';

const AUTH_ROUTES = ['login', 'otp', 'signup'];

@customElement('core-viewport')
export class CoreViewport extends LitElement {
  @state() private _currentView = 'hub';
  @state() private _resources: ResourceItem[] = [];
  @state() private _documents: ClientDocument[] = [];
  @state() private _workspaceUser: WorkspaceUser | null = null;
  @state() private _loading = true;

  private _unsubscribeResources: (() => void) | null = null;
  private _unsubscribeDocuments: (() => void) | null = null;
  private _authHandler!: (e: Event) => void;
  private _authRequestId = 0;

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
      const view = (e as CustomEvent<{ view: string }>).detail.view;
      if (authService.isAuthenticated() && AUTH_ROUTES.includes(view)) {
        router.navigate('app://hub');
        return;
      }
      this._currentView = view;
      this.requestUpdate();
    });

    this._authHandler = (e: Event) => {
      void this._onAuthChanged((e as CustomEvent<{ user: ClientInfo | null }>).detail.user);
    };
    authService.addEventListener('auth-changed', this._authHandler);

    void this._onAuthChanged(authService.getUser());
    router.resolveRoute();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    authService.removeEventListener('auth-changed', this._authHandler);
    this._teardownDataSubscriptions();
  }

  private async _onAuthChanged(user: ClientInfo | null) {
    const requestId = ++this._authRequestId;

    if (user?.phone) {
      this._teardownDataSubscriptions();
      this._loading = true;
      this._resources = [];
      this._documents = [];
      this._workspaceUser = null;

      let workspaceUser: WorkspaceUser | null = null;
      try {
        workspaceUser = await fetchWorkspaceUser(user.phone);
      } catch (error) {
        console.error('Failed to resolve workspace user from Firestore:', error);
      }

      if (requestId !== this._authRequestId) {
        return;
      }

      const clientId = workspaceUser?.clientId ?? user.clientId;
      if (!clientId) {
        this._loading = false;
        return;
      }

      this._workspaceUser = workspaceUser ?? this._buildFallbackWorkspaceUser(user, clientId);

      let resourcesLoaded = false;
      let documentsLoaded = false;
      const markLoaded = () => {
        this._loading = !(resourcesLoaded && documentsLoaded);
        this.requestUpdate();
      };

      this._unsubscribeResources = subscribeToClientResources(clientId, (data) => {
        if (requestId !== this._authRequestId) {
          return;
        }
        this._resources = data;
        resourcesLoaded = true;
        markLoaded();
      });

      this._unsubscribeDocuments = subscribeToClientDocuments(clientId, (data) => {
        if (requestId !== this._authRequestId) {
          return;
        }
        this._documents = data;
        documentsLoaded = true;
        markLoaded();
      });

      if (AUTH_ROUTES.includes(this._currentView)) {
        router.navigate('app://hub');
      }
      return;
    }

    this._teardownDataSubscriptions();
    this._resources = [];
    this._documents = [];
    this._workspaceUser = null;
    this._loading = false;
    if (!AUTH_ROUTES.includes(this._currentView)) {
      router.navigate('app://login');
    }
  }

  private _teardownDataSubscriptions() {
    if (this._unsubscribeResources) {
      this._unsubscribeResources();
      this._unsubscribeResources = null;
    }

    if (this._unsubscribeDocuments) {
      this._unsubscribeDocuments();
      this._unsubscribeDocuments = null;
    }
  }

  private _buildFallbackWorkspaceUser(user: ClientInfo, clientId: string): WorkspaceUser {
    return {
      phone: user.phone,
      phone_1: user.phone_1,
      phone_2: user.phone_2,
      clientId,
      name: user.name,
      email: user.email,
      role: user.role ?? 'viewer',
      isActive: true,
      planId: user.planId,
    };
  }

  private renderDynamicView() {
    if (this._loading && !AUTH_ROUTES.includes(this._currentView)) {
      return html`<p>Loading your workspace...</p>`;
    }

    switch (this._currentView) {
      case 'hub':
        return html`<view-hub .items=${this._resources}></view-hub>`;
      case 'tracker':
        return html`<view-tracker .items=${this._resources}></view-tracker>`;
      case 'vault':
        return html`
          <view-vault
            .items=${this._resources}
            .documents=${this._documents}
            .userRole=${this._workspaceUser?.role ?? 'viewer'}
          ></view-vault>
        `;
      case 'login':
        return html`<view-login></view-login>`;
      case 'otp':
        return html`<view-otp></view-otp>`;
      case 'signup':
        return html`<view-signup></view-signup>`;
      default:
        return html`<p>Page not found</p>`;
    }
  }

  render() {
    return html`${this.renderDynamicView()}`;
  }
}
