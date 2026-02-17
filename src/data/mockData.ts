import { AppState } from '../models/ResourceState';

export const mockAppState: AppState = {
    user: {
        name: "Acme Corp Lead",
        email: "client@acmecorp.com",
        tier: "Pro",
        avatarUrl: "https://ui-avatars.com/api/?name=Acme+Corp&background=6200ee&color=fff"
    },
    resources: [
        {
            id: "res_001",
            category: "hub",
            title: "Enterprise Web Portal",
            description: "Bespoke development of the main customer-facing portal.",
            deliverableType: "project",
            statusPercent: 65,
            statusLabel: "UAT Testing Phase",
            isPremium: true,
            deliveryDate: "2026-03-15T00:00:00Z",
            lastModified: "2026-02-16T10:00:00Z",
            artifacts: []
        },
        {
            id: "res_002",
            category: "tracker",
            title: "Q1 Marketing Video Assets",
            description: "Motion graphics and promotional video compilation.",
            deliverableType: "rich-media",
            statusPercent: 40,
            statusLabel: "Storyboarding Approved. Animating...",
            isPremium: true,
            lastModified: "2026-02-17T08:30:00Z",
            artifacts: [
                { id: "art_1", name: "Storyboard_v2.pdf", url: "app://vault/art_1", type: "application/pdf" }
            ]
        },
        {
            id: "res_003",
            category: "vault",
            title: "Signed SLA & Initial Invoice",
            description: "Executed contracts for Q1-Q2 retainer.",
            deliverableType: "document",
            statusPercent: 100,
            statusLabel: "Completed & Paid",
            isPremium: false,
            lastModified: "2026-01-10T14:00:00Z",
            artifacts: [
                { id: "art_2", name: "SLA_Signed.pdf", url: "https://firebasestorage...", type: "application/pdf", sizeMb: 2.4 },
                { id: "art_3", name: "Invoice_INV099.pdf", url: "https://firebasestorage...", type: "application/pdf", sizeMb: 0.8 }
            ]
        }
    ]
};
