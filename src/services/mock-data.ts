import { mockDatabase } from '../data/mockData';
import type { ClientDocument, ClientRecord, Plan, User, WorkspaceUser } from '../types/index';
import type { ClientProfile, ResourceItem } from '../models/ResourceState';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const clone = <T>(value: T): T => JSON.parse(JSON.stringify(value)) as T;

const buildUser = (workspaceUser: WorkspaceUser, client: ClientProfile): User => ({
  uid: workspaceUser.phone,
  displayName: workspaceUser.name,
  email: workspaceUser.email ?? client.organization.email ?? 'client@example.com',
  tier: client.subscription.planId === 'plan_enterprise'
    ? 'enterprise'
    : client.subscription.planId === 'plan_pro'
      ? 'premium'
      : 'entry',
  avatarUrl: client.organization.avatarUrl,
  phone: workspaceUser.phone,
  phone_1: client.phone_1,
  phone_2: client.phone_2,
  role: workspaceUser.role,
  clientId: workspaceUser.clientId,
  planId: client.subscription.planId,
});

const getClientProfile = (clientId: string): ClientProfile | null => mockDatabase.clients[clientId] ?? null;

const toClientRecord = (client: ClientProfile): ClientRecord => clone({
  ...client,
  resources: client.resources.map((resource) => ({
    id: resource.id,
    clientId: resource.clientId,
    category: resource.category,
    title: resource.title,
    description: resource.description,
    deliverableType: resource.deliverableType,
    statusPercent: resource.statusPercent,
    statusLabel: resource.statusLabel,
    isPremium: resource.isPremium,
    deliveryDate: resource.deliveryDate,
    lastModified: resource.lastModified,
    updatedAt: resource.updatedAt,
    accessLevel: resource.accessLevel,
    resources: resource.resources,
    artifacts: resource.artifacts,
    metadata: resource.metadata,
  })),
});

export class DataService {
  static async getUser(uid: string): Promise<User> {
    await sleep(300);
    const workspaceUser = mockDatabase.workspaceUsers[uid];
    if (!workspaceUser) {
      throw new Error(`Workspace user not found for ${uid}`);
    }

    const client = getClientProfile(workspaceUser.clientId);
    if (!client) {
      throw new Error(`Client not found for ${workspaceUser.clientId}`);
    }

    return clone(buildUser(workspaceUser, client));
  }

  static async getClient(clientId: string): Promise<ClientRecord | null> {
    await sleep(250);
    const client = getClientProfile(clientId);
    return client ? toClientRecord(client) : null;
  }

  static async getClients(): Promise<ClientRecord[]> {
    await sleep(250);
    return Object.values(mockDatabase.clients).map((client) => toClientRecord(client));
  }

  static async getWorkspaceUser(phone: string): Promise<WorkspaceUser | null> {
    await sleep(200);
    return clone(mockDatabase.workspaceUsers[phone] ?? null);
  }

  static async getPlan(planId: string): Promise<Plan | null> {
    await sleep(200);
    return clone(mockDatabase.plans[planId] ?? null);
  }

  static async getResources(clientId: string): Promise<ResourceItem[]> {
    await sleep(300);
    return clone(getClientProfile(clientId)?.resources ?? []);
  }

  static async getDocuments(clientId: string): Promise<ClientDocument[]> {
    await sleep(300);
    return clone(getClientProfile(clientId)?.documents ?? []);
  }

  static async upsertWorkspaceUser(phone: string, data: Partial<WorkspaceUser>): Promise<WorkspaceUser> {
    await sleep(250);
    const existing = mockDatabase.workspaceUsers[phone];
    if (!existing) {
      throw new Error(`Workspace user not found for ${phone}`);
    }

    const nextUser = { ...existing, ...clone(data), phone };
    mockDatabase.workspaceUsers[phone] = nextUser;
    return clone(nextUser);
  }

  static async upsertClient(clientId: string, data: Partial<ClientRecord>): Promise<ClientRecord> {
    await sleep(300);
    const existing = getClientProfile(clientId);
    if (!existing) {
      throw new Error(`Client not found for ${clientId}`);
    }

    const nextClient: ClientProfile = {
      ...existing,
      ...clone(data),
      clientId,
      organization: { ...existing.organization, ...clone(data.organization ?? {}) },
      subscription: { ...existing.subscription, ...clone(data.subscription ?? {}) },
      workspaceUserPhones: clone(data.workspaceUserPhones ?? existing.workspaceUserPhones),
      resources: clone((data.resources as ResourceItem[] | undefined) ?? existing.resources),
      documents: clone(data.documents ?? existing.documents),
    };

    mockDatabase.clients[clientId] = nextClient;
    mockDatabase.organizations[clientId] = nextClient.organization;
    mockDatabase.subscriptions[clientId] = nextClient.subscription;

    return toClientRecord(nextClient);
  }

  static async updateClientResource(
    clientId: string,
    resourceId: string,
    data: Partial<ResourceItem>,
  ): Promise<ResourceItem> {
    await sleep(250);
    const client = getClientProfile(clientId);
    if (!client) {
      throw new Error(`Client not found for ${clientId}`);
    }

    const index = client.resources.findIndex((resource) => resource.id === resourceId);
    if (index === -1) {
      throw new Error(`Resource not found for ${resourceId}`);
    }

    const nextResource = {
      ...client.resources[index],
      ...clone(data),
      id: resourceId,
      clientId,
      updatedAt: data.updatedAt ?? new Date().toISOString(),
      resources: clone(data.resources ?? client.resources[index].resources),
      artifacts: clone(data.artifacts ?? data.resources ?? client.resources[index].artifacts),
    };

    client.resources[index] = nextResource;
    return clone(nextResource);
  }

  static async addClientDocument(clientId: string, document: ClientDocument): Promise<ClientDocument> {
    await sleep(250);
    const client = getClientProfile(clientId);
    if (!client) {
      throw new Error(`Client not found for ${clientId}`);
    }

    const nextDocument = {
      ...clone(document),
      clientId,
      updatedAt: document.updatedAt ?? document.uploadedAt ?? new Date().toISOString(),
    };

    client.documents = [...client.documents, nextDocument];
    return clone(nextDocument);
  }
}
