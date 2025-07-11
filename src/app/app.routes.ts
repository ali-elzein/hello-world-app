import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    {
        path: 'observable-demo',
        loadComponent: () =>
            import('./auth/components/observable-demo/observable-demo')
                .then(m => m.ObservableDemoComponent)
    }
];