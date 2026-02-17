export type ResourceType = 'service' | 'project' | 'file';
export type ServiceTier = 'entry' | 'premium';

export interface Resource {
    id: string;
    clientId: string;
    type: ResourceType;
    title: string;
    status: string; // 'active', 'completed', 'pending'
    progress: number; // 0-100
    nextDeliveryDate?: string;
    downloadUrl?: string;
    meta?: Record<string, any>;
    timestamp: number;
}

export interface User {
    uid: string;
    displayName: string;
    email: string;
    tier: ServiceTier;
    avatarUrl?: string;
}
