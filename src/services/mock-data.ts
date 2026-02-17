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
        displayCategory: 'hub',
        title: 'Monthly SEO Audit',
        status: {
            state: 'active',
            percentage: 0,
            label: 'Active'
        },
        deliveryDate: '2023-11-15',
        timestamp: 1698750000000,
        meta: { tier: 'premium' }
    },
    {
        id: 'res-2',
        clientId: 'user-123',
        type: 'project',
        displayCategory: 'tracker',
        title: 'Website Redesign',
        status: {
            state: 'in_progress',
            percentage: 65,
            label: 'In Progress'
        },
        timestamp: 1696158000000
    },
    {
        id: 'res-3',
        clientId: 'user-123',
        type: 'file',
        displayCategory: 'vault',
        title: 'Invoice #1023',
        status: {
            state: 'completed',
            percentage: 100,
            label: 'Paid'
        },
        artifacts: [
            {
                type: 'invoice',
                url: '#',
                name: 'Invoice #1023.pdf'
            }
        ],
        timestamp: 1698000000000
    },
    {
        id: 'res-4',
        clientId: 'user-123',
        type: 'file',
        displayCategory: 'vault',
        title: 'Q3 Analytics Report',
        status: {
            state: 'completed',
            percentage: 100,
            label: 'Delivered'
        },
        artifacts: [
            {
                type: 'report',
                url: '#',
                name: 'Q3 Report.pdf'
            }
        ],
        timestamp: 1697000000000
    }
];

export class DataService {
    static async getUser(_uid: string): Promise<User> {
        // Simulate network delay
        await new Promise(r => setTimeout(r, 500));
        return mockUser;
    }

    static async getResources(_uid: string): Promise<Resource[]> {
        await new Promise(r => setTimeout(r, 800));
        return mockResources;
    }
}
