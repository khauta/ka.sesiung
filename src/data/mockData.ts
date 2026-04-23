import clientsSeed from './clients.json';
import type { ClientsSeedDatabase } from '../types/index';
import {
  AppState,
  ClientDocument,
  ClientProfile,
  MockDatabase,
  ResourceItem,
} from '../models/ResourceState';

const seedDatabase = clientsSeed as ClientsSeedDatabase;

const buildArtifacts = (clientId: string, entries: Array<{
  id: string;
  name: string;
  fileName: string;
  type: string;
  sizeMb: number;
  category: ClientDocument['category'];
  accessLevel: ClientDocument['accessLevel'];
}>) => entries.map((entry) => ({
  id: entry.id,
  name: entry.name,
  fileName: entry.fileName,
  url: `https://storage.googleapis.com/superstore-b3500/${clientId}/${entry.fileName}`,
  downloadUrl: `https://storage.googleapis.com/superstore-b3500/${clientId}/${entry.fileName}`,
  type: entry.type,
  mimeType: entry.type,
  sizeMb: entry.sizeMb,
  category: entry.category,
  accessLevel: entry.accessLevel,
  metadata: {
    sourcePath: `client documents/${clientId}/${entry.fileName}`,
    storagePath: `${clientId}/${entry.fileName}`,
  },
}));

const resourceFixtures: Record<string, ResourceItem[]> = {
  client_01: [
    {
      id: 'res_001',
      clientId: 'client_01',
      category: 'hub',
      title: 'Enterprise Web Portal',
      description: 'Bespoke development of the main customer-facing portal.',
      deliverableType: 'project',
      statusPercent: 65,
      statusLabel: 'UAT testing phase',
      isPremium: true,
      deliveryDate: '2026-05-15T00:00:00Z',
      lastModified: '2026-04-20T10:00:00Z',
      updatedAt: '2026-04-20T10:00:00Z',
      accessLevel: 'manager',
      resources: [],
      artifacts: [],
      metadata: { boardId: 'board-portal-01' },
    },
    {
      id: 'res_002',
      clientId: 'client_01',
      category: 'tracker',
      title: 'Q2 Launch Assets',
      description: 'Campaign motion graphics and launch-ready media exports.',
      deliverableType: 'rich-media',
      statusPercent: 40,
      statusLabel: 'Storyboarding approved',
      isPremium: true,
      lastModified: '2026-04-22T08:30:00Z',
      updatedAt: '2026-04-22T08:30:00Z',
      accessLevel: 'manager',
      resources: buildArtifacts('client_01', [
        {
          id: 'art_001',
          name: 'Storyboard_v2.pdf',
          fileName: 'Storyboard_v2.pdf',
          type: 'application/pdf',
          sizeMb: 1.2,
          category: 'report',
          accessLevel: 'manager',
        },
      ]),
      artifacts: buildArtifacts('client_01', [
        {
          id: 'art_001',
          name: 'Storyboard_v2.pdf',
          fileName: 'Storyboard_v2.pdf',
          type: 'application/pdf',
          sizeMb: 1.2,
          category: 'report',
          accessLevel: 'manager',
        },
      ]),
      metadata: { milestone: 'creative-approval' },
    },
    {
      id: 'res_003',
      clientId: 'client_01',
      category: 'vault',
      title: 'Signed SLA & Initial Invoice',
      description: 'Executed contracts and billing documents for the current retainer.',
      deliverableType: 'document',
      statusPercent: 100,
      statusLabel: 'Completed & paid',
      isPremium: false,
      lastModified: '2026-04-15T14:00:00Z',
      updatedAt: '2026-04-15T14:00:00Z',
      accessLevel: 'all',
      resources: buildArtifacts('client_01', [
        {
          id: 'art_002',
          name: 'SLA_Signed.pdf',
          fileName: 'SLA_Signed.pdf',
          type: 'application/pdf',
          sizeMb: 2.4,
          category: 'contract',
          accessLevel: 'all',
        },
        {
          id: 'art_003',
          name: 'Invoice_INV099.pdf',
          fileName: 'Invoice_INV099.pdf',
          type: 'application/pdf',
          sizeMb: 0.8,
          category: 'invoice',
          accessLevel: 'all',
        },
      ]),
      artifacts: buildArtifacts('client_01', [
        {
          id: 'art_002',
          name: 'SLA_Signed.pdf',
          fileName: 'SLA_Signed.pdf',
          type: 'application/pdf',
          sizeMb: 2.4,
          category: 'contract',
          accessLevel: 'all',
        },
        {
          id: 'art_003',
          name: 'Invoice_INV099.pdf',
          fileName: 'Invoice_INV099.pdf',
          type: 'application/pdf',
          sizeMb: 0.8,
          category: 'invoice',
          accessLevel: 'all',
        },
      ]),
      metadata: { folder: 'client documents/client_01' },
    },
  ],
  client_02: [
    {
      id: 'res_101',
      clientId: 'client_02',
      category: 'hub',
      title: 'Brand Refresh Programme',
      description: 'Identity refresh rollout for the internal and customer touchpoints.',
      deliverableType: 'service',
      statusPercent: 75,
      statusLabel: 'Awaiting stakeholder sign-off',
      isPremium: false,
      deliveryDate: '2026-05-28T00:00:00Z',
      lastModified: '2026-04-19T16:20:00Z',
      updatedAt: '2026-04-19T16:20:00Z',
      accessLevel: 'manager',
      resources: [],
      artifacts: [],
      metadata: { accountLead: 'studio-team' },
    },
    {
      id: 'res_102',
      clientId: 'client_02',
      category: 'vault',
      title: 'Onboarding Pack',
      description: 'Shared documents and signed intake checklist.',
      deliverableType: 'file',
      statusPercent: 100,
      statusLabel: 'Shared',
      isPremium: false,
      lastModified: '2026-04-12T09:00:00Z',
      updatedAt: '2026-04-12T09:00:00Z',
      accessLevel: 'all',
      resources: buildArtifacts('client_02', [
        {
          id: 'art_101',
          name: 'Onboarding_Checklist.docx',
          fileName: 'Onboarding_Checklist.docx',
          type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
          sizeMb: 0.4,
          category: 'document',
          accessLevel: 'all',
        },
      ]),
      artifacts: buildArtifacts('client_02', [
        {
          id: 'art_101',
          name: 'Onboarding_Checklist.docx',
          fileName: 'Onboarding_Checklist.docx',
          type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
          sizeMb: 0.4,
          category: 'document',
          accessLevel: 'all',
        },
      ]),
      metadata: { folder: 'client documents/client_02' },
    },
  ],
  client_03: [
    {
      id: 'res_201',
      clientId: 'client_03',
      category: 'tracker',
      title: 'Broadcast Sponsorship Campaign',
      description: 'Media buying, artwork approvals, and radio placement schedule.',
      deliverableType: 'project',
      statusPercent: 55,
      statusLabel: 'Awaiting station confirmation',
      isPremium: true,
      lastModified: '2026-04-21T13:10:00Z',
      updatedAt: '2026-04-21T13:10:00Z',
      accessLevel: 'manager',
      resources: buildArtifacts('client_03', [
        {
          id: 'art_201',
          name: 'Station_Schedule.xlsx',
          fileName: 'Station_Schedule.xlsx',
          type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
          sizeMb: 0.9,
          category: 'report',
          accessLevel: 'manager',
        },
      ]),
      artifacts: buildArtifacts('client_03', [
        {
          id: 'art_201',
          name: 'Station_Schedule.xlsx',
          fileName: 'Station_Schedule.xlsx',
          type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
          sizeMb: 0.9,
          category: 'report',
          accessLevel: 'manager',
        },
      ]),
      metadata: { campaignCode: 'MM-BROADCAST-Q2' },
    },
  ],
};

const documentFixtures: Record<string, ClientDocument[]> = {
  client_01: [
    {
      id: 'doc_001',
      clientId: 'client_01',
      resourceId: 'res_003',
      name: 'Signed SLA',
      fileName: 'SLA_Signed.pdf',
      fileType: 'pdf',
      mimeType: 'application/pdf',
      downloadUrl: 'https://storage.googleapis.com/superstore-b3500/client_01/SLA_Signed.pdf',
      category: 'contract',
      accessLevel: 'all',
      uploadedAt: '2026-04-15T14:00:00Z',
      updatedAt: '2026-04-15T14:00:00Z',
      uploadedBy: 'admin',
      sizeMb: 2.4,
      metadata: {
        sourcePath: 'client documents/client_01/SLA_Signed.pdf',
        storagePath: 'client_01/SLA_Signed.pdf',
      },
    },
    {
      id: 'doc_002',
      clientId: 'client_01',
      name: 'Proof of Payment',
      fileName: 'Proof_of_Payment_April.pdf',
      fileType: 'pdf',
      mimeType: 'application/pdf',
      downloadUrl: 'https://storage.googleapis.com/superstore-b3500/client_01/Proof_of_Payment_April.pdf',
      category: 'proof-of-payment',
      accessLevel: 'manager',
      uploadedAt: '2026-04-16T09:00:00Z',
      updatedAt: '2026-04-16T09:00:00Z',
      uploadedBy: '+26657284264',
      sizeMb: 0.7,
      metadata: {
        sourcePath: 'client documents/client_01/Proof_of_Payment_April.pdf',
        storagePath: 'client_01/Proof_of_Payment_April.pdf',
      },
    },
  ],
  client_02: [
    {
      id: 'doc_101',
      clientId: 'client_02',
      name: 'Kickoff Notes',
      fileName: 'Kickoff_Notes.docx',
      fileType: 'docx',
      mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      downloadUrl: 'https://storage.googleapis.com/superstore-b3500/client_02/Kickoff_Notes.docx',
      category: 'document',
      accessLevel: 'all',
      uploadedAt: '2026-04-10T10:00:00Z',
      updatedAt: '2026-04-10T10:00:00Z',
      uploadedBy: 'admin',
      sizeMb: 0.3,
      metadata: {
        sourcePath: 'client documents/client_02/Kickoff_Notes.docx',
        storagePath: 'client_02/Kickoff_Notes.docx',
      },
    },
  ],
  client_03: [
    {
      id: 'doc_201',
      clientId: 'client_03',
      name: 'Invoice April 2026',
      fileName: 'Invoice_MM_2026_04.pdf',
      fileType: 'pdf',
      mimeType: 'application/pdf',
      downloadUrl: 'https://storage.googleapis.com/superstore-b3500/client_03/Invoice_MM_2026_04.pdf',
      category: 'invoice',
      accessLevel: 'owner',
      uploadedAt: '2026-04-12T12:45:00Z',
      updatedAt: '2026-04-12T12:45:00Z',
      uploadedBy: 'admin',
      sizeMb: 0.9,
      metadata: {
        sourcePath: 'client documents/client_03/Invoice_MM_2026_04.pdf',
        storagePath: 'client_03/Invoice_MM_2026_04.pdf',
      },
    },
  ],
};

const clients = Object.fromEntries(
  Object.entries(seedDatabase.clients).map(([clientId, client]) => [
    clientId,
    {
      ...client,
      resources: resourceFixtures[clientId] ?? [],
      documents: documentFixtures[clientId] ?? [],
    } satisfies ClientProfile,
  ])
) as Record<string, ClientProfile>;

const organizations = Object.fromEntries(
  Object.entries(clients).map(([clientId, client]) => [clientId, client.organization])
);

const subscriptions = Object.fromEntries(
  Object.entries(clients).map(([clientId, client]) => [clientId, client.subscription])
);

export const mockDatabase: MockDatabase = {
  clients,
  workspaceUsers: seedDatabase.workspaceUsers,
  plans: seedDatabase.plans,
  organizations,
  subscriptions,
};

const defaultWorkspaceUser = mockDatabase.workspaceUsers['+26657284264'];
const defaultClient = defaultWorkspaceUser
  ? mockDatabase.clients[defaultWorkspaceUser.clientId]
  : null;

export const mockAppState: AppState = {
  currentUser: defaultWorkspaceUser ?? null,
  currentClientId: defaultClient?.clientId ?? null,
  clients: mockDatabase.clients,
  workspaceUsers: mockDatabase.workspaceUsers,
  plans: mockDatabase.plans,
  organizations: mockDatabase.organizations,
  subscriptions: mockDatabase.subscriptions,
  resources: defaultClient?.resources ?? [],
  documents: defaultClient?.documents ?? [],
};
