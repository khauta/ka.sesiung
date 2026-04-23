import type {
    AccessLevel,
    FileCategory,
    PlanTier,
    SubscriptionStatus,
    UserRole,
} from '../types/index';

export type ResourceCategory = 'hub' | 'tracker' | 'vault';
export type DeliverableType = 'service' | 'project' | 'document' | 'rich-media' | 'file';

export interface Artifact {
    id: string;
    name: string;
    fileName?: string;
    url: string;
    downloadUrl?: string;
    type: string;
    mimeType?: string;
    sizeMb?: number;
    category?: FileCategory;
    accessLevel?: AccessLevel;
    metadata?: Record<string, unknown>;
}

export interface ResourceItem {
    id: string;
    clientId: string;
    category: ResourceCategory;
    title: string;
    description: string;
    deliverableType: DeliverableType;
    statusPercent: number;
    statusLabel: string;
    isPremium: boolean;
    deliveryDate?: string;
    lastModified: string;
    updatedAt?: string;
    accessLevel?: AccessLevel;
    resources: Artifact[];
    artifacts: Artifact[];
    metadata?: Record<string, unknown>;
}

export interface ClientDocument {
    id: string;
    clientId: string;
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

export interface SubscriptionInfo {
    planId: string;
    status: SubscriptionStatus;
    startedAt: string;
    endsAt?: string;
    renewsAt?: string;
    metadata?: Record<string, unknown>;
}

export interface OrganizationProfile {
    name: string;
    email?: string;
    industry?: string;
    avatarUrl?: string;
    workspaceSlug?: string;
    metadata?: Record<string, unknown>;
}

export interface ClientProfile {
    clientId: string;
    organization: OrganizationProfile;
    phone: string;
    phone_1?: string;
    phone_2?: string;
    subscription: SubscriptionInfo;
    workspaceUserPhones: string[];
    resources: ResourceItem[];
    documents: ClientDocument[];
    metadata?: Record<string, unknown>;
}

export interface MockDatabase {
    clients: Record<string, ClientProfile>;
    workspaceUsers: Record<string, WorkspaceUser>;
    plans: Record<string, Plan>;
    organizations: Record<string, OrganizationProfile>;
    subscriptions: Record<string, SubscriptionInfo>;
}

export interface AppState {
    currentUser: WorkspaceUser | null;
    currentClientId: string | null;
    clients: Record<string, ClientProfile>;
    workspaceUsers: Record<string, WorkspaceUser>;
    plans: Record<string, Plan>;
    organizations: Record<string, OrganizationProfile>;
    subscriptions: Record<string, SubscriptionInfo>;
    resources: ResourceItem[];
    documents: ClientDocument[];
}
