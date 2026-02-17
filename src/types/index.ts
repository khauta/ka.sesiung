export type ResourceType = 'service' | 'product' | 'file' | 'notification' | 'project'; // Added project to match existing usage if needed, but per spec: service, product, file, notification
export type DisplayCategory = 'hub' | 'tracker' | 'vault';
export type ResourceState = 'active' | 'completed' | 'pending' | 'in_progress' | 'delivered' | 'cancelled';

export interface ResourceStatus {
    state: ResourceState;
    percentage: number; // 0-100
    label: string; // Human readable status e.g. "QA Testing Phase"
}

export interface ResourceArtifact {
    type: 'invoice' | 'receipt' | 'report' | 'deliverable' | 'link';
    url: string;
    name: string;
}

export interface Resource {
    id: string;
    clientId?: string; // Optional or required depending on if it's user-specific in the client
    type: ResourceType;
    displayCategory: DisplayCategory;
    title: string;
    description?: string;
    status: ResourceStatus;
    artifacts?: ResourceArtifact[];
    deliveryDate?: string;
    isPremium?: boolean;
    meta?: Record<string, any>; // For extra JSON data
    timestamp?: number; // Kept for sorting if needed
}

export interface User {
    uid: string;
    displayName: string;
    email: string;
    tier: 'entry' | 'premium'; // ServiceTier
    avatarUrl?: string;
}

export interface PluginManifest {
    [pluginName: string]: string; // URL to the plugin script
}
