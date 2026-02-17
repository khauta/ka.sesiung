export type Route = 'hub' | 'tracker' | 'vault';

export interface RouteConfig {
    pattern: RegExp;
    view: Route;
}

export class AppRouter extends EventTarget {
    private static instance: AppRouter;
    private routes: RouteConfig[] = [
        { pattern: /^app:\/\/hub/, view: 'hub' },
        { pattern: /^app:\/\/tracker/, view: 'tracker' },
        { pattern: /^app:\/\/vault/, view: 'vault' },
        // Fallbacks for standard web access
        { pattern: /^\/hub/, view: 'hub' },
        { pattern: /^\/tracker/, view: 'tracker' },
        { pattern: /^\/vault/, view: 'vault' },
        { pattern: /^\/$/, view: 'hub' }
    ];

    private constructor() {
        super();
        window.addEventListener('popstate', () => this.resolveRoute());
        // Handle hash changes too for simpler navigating without reload
        window.addEventListener('hashchange', () => this.resolveRoute());
    }

    static get getInstance(): AppRouter {
        if (!AppRouter.instance) {
            AppRouter.instance = new AppRouter();
        }
        return AppRouter.instance;
    }

    navigate(path: string) {
        if (path.startsWith('app://')) {
            // For simulated app:// environment, we might store this in session or just URL hash
            // But for web PWA, we usually map app:// to /
            const webPath = path.replace('app://', '/');
            window.history.pushState({}, '', webPath);
        } else {
            window.history.pushState({}, '', path);
        }
        this.resolveRoute();
    }

    resolveRoute() {
        const path = window.location.pathname;
        const matched = this.routes.find(r => r.pattern.test(path));
        const view = matched ? matched.view : 'hub';

        this.dispatchEvent(new CustomEvent('route-changed', {
            detail: { view }
        }));
    }
}

export const router = AppRouter.getInstance;
