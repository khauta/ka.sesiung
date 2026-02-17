export type ResourceCategory = 'hub' | 'tracker' | 'vault';
export type DeliverableType = 'service' | 'project' | 'document' | 'rich-media';

export interface Artifact {
    id: string;
    name: string;
    url: string; // The URL scheme or external link
    type: string; // e.g., 'application/pdf', 'video/mp4'
    sizeMb?: number;
}

export interface ResourceItem {
    id: string;
    category: ResourceCategory;
    title: string;
    description: string;
    deliverableType: DeliverableType;
    statusPercent: number; // 0 - 100
    statusLabel: string;
    isPremium: boolean;
    deliveryDate?: string; // ISO String
    lastModified: string; // ISO String
    artifacts: Artifact[];
}

export interface AppState {
    user: {
        name: string;
        email: string;
        tier: 'Entry' | 'Pro' | 'Enterprise';
        avatarUrl: string;
    };
    resources: ResourceItem[];
}
