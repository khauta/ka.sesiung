export type ResourceType = 'service' | 'product' | 'file' | 'notification' | 'project';
export type DisplayCategory = 'hub' | 'tracker' | 'vault';
export type ResourceState = 'active' | 'completed' | 'pending' | 'in_progress' | 'delivered' | 'cancelled';
export type SubscriptionStatus = 'active' | 'inactive' | 'suspended' | 'trial' | 'cancelled';
export type AccessLevel = 'all' | 'premium' | 'manager' | 'owner' | 'admin';
export type FileCategory = 'invoice' | 'receipt' | 'proof-of-payment' | 'contract' | 'report' | 'media' | 'deliverable' | 'document' | 'other';
export type UserRole = 'owner' | 'manager' | 'viewer' | 'admin';
export type PlanTier = 'entry' | 'pro' | 'enterprise';

export interface ResourceStatus {
    state: ResourceState;
    percentage: number;
    label: string;
}

export interface ResourceArtifact {
    id?: string;
    type: string;
    url: string;
    name: string;
    fileName?: string;
    mimeType?: string;
    downloadUrl?: string;
    sizeMb?: number;
    category?: FileCategory;
    accessLevel?: AccessLevel;
    metadata?: Record<string, unknown>;
}

export interface Resource {
    id: string;
    clientId?: string;
    type: ResourceType;
    displayCategory: DisplayCategory;
    title: string;
    description?: string;
    status: ResourceStatus;
    artifacts?: ResourceArtifact[];
    resources?: ResourceArtifact[];
    deliveryDate?: string;
    isPremium?: boolean;
    meta?: Record<string, unknown>;
    timestamp?: number;
    lastModified?: string;
    updatedAt?: string;
}

export interface User {
    uid: string;
    displayName: string;
    email: string;
    tier: 'entry' | 'premium' | 'enterprise';
    avatarUrl?: string;
    phone?: string;
    phone_1?: string;
    phone_2?: string;
    role?: UserRole;
    clientId?: string;
    planId?: string;
}

export interface Plan {
    planId: string;
    name: string;
    tier: PlanTier;
    monthlyPrice: number;
    currency: string;
    features: string[];
    maxWorkspaceUsers: number;
    maxStorageMb: number;
    isActive: boolean;
    metadata?: Record<string, unknown>;
}

export interface ClientDocument {
    id: string;
    clientId?: string;
    resourceId?: string;
    name: string;
    fileName: string;
    fileType: string;
    mimeType: string;
    downloadUrl: string;
    category: FileCategory;
    accessLevel: AccessLevel;
    uploadedAt: string;
    updatedAt?: string;
    uploadedBy?: string;
    sizeMb?: number;
    metadata?: Record<string, unknown>;
}

export interface WorkspaceUser {
    phone: string;
    clientId: string;
    name: string;
    email?: string;
    role: UserRole;
    isActive: boolean;
    accessLevel?: AccessLevel;
    phone_1?: string;
    phone_2?: string;
    planId?: string;
    subscribed_to_whatsapp_otp?: boolean;
    createdAt?: string;
    lastLogin?: string;
    metadata?: Record<string, unknown>;
}

export interface OrganizationData {
    name: string;
    email?: string;
    industry?: string;
    avatarUrl?: string;
    workspaceSlug?: string;
    metadata?: Record<string, unknown>;
}

export interface ClientSubscription {
    planId: string;
    status: SubscriptionStatus;
    startedAt: string;
    endsAt?: string;
    renewsAt?: string;
    metadata?: Record<string, unknown>;
}

export interface ClientResource {
    id: string;
    clientId: string;
    category: DisplayCategory;
    title: string;
    description?: string;
    deliverableType: 'service' | 'project' | 'document' | 'rich-media' | 'file';
    statusPercent: number;
    statusLabel: string;
    isPremium: boolean;
    deliveryDate?: string;
    lastModified: string;
    updatedAt?: string;
    accessLevel?: AccessLevel;
    resources: ResourceArtifact[];
    artifacts?: ResourceArtifact[];
    metadata?: Record<string, unknown>;
}

export interface ClientRecord {
    clientId: string;
    organization: OrganizationData;
    phone: string;
    phone_1?: string;
    phone_2?: string;
    subscription: ClientSubscription;
    workspaceUserPhones: string[];
    resources: ClientResource[];
    documents: ClientDocument[];
    metadata?: Record<string, unknown>;
}

export interface ClientsSeedDatabase {
    version: number;
    updatedAt: string;
    plans: Record<string, Plan>;
    clients: Record<string, ClientRecord>;
    workspaceUsers: Record<string, WorkspaceUser>;
}

export interface PluginManifest {
    [pluginName: string]: string;
}
