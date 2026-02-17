import { Resource, User } from '../types/index';

export const mockUser: User = {
    uid: 'user-123',
    displayName: 'Aurum Client',
    email: 'client@example.com',
    tier: 'premium'
};

export const mockResources: Resource[] = [
    {
        id: 'res-1',
        clientId: 'user-123',
        type: 'service',
        title: 'Monthly SEO Audit',
        status: 'active',
        progress: 0,
        nextDeliveryDate: '2023-11-15',
        timestamp: 1698750000000,
        meta: { tier: 'premium' }
    },
    {
        id: 'res-2',
        clientId: 'user-123',
        type: 'project',
        title: 'Website Redesign',
        status: 'in-progress',
        progress: 65,
        timestamp: 1696158000000
    },
    {
        id: 'res-3',
        clientId: 'user-123',
        type: 'file',
        title: 'Invoice #1023',
        status: 'completed',
        progress: 100,
        downloadUrl: '#',
        timestamp: 1698000000000
    },
    {
        id: 'res-4',
        clientId: 'user-123',
        type: 'file',
        title: 'Q3 Analytics Report',
        status: 'completed',
        progress: 100,
        downloadUrl: '#',
        timestamp: 1697000000000
    }
];

export class DataService {
    static async getUser(uid: string): Promise<User> {
        // Simulate network delay
        await new Promise(r => setTimeout(r, 500));
        return mockUser;
    }

    static async getResources(uid: string): Promise<Resource[]> {
        await new Promise(r => setTimeout(r, 800));
        return mockResources;
    }
}
