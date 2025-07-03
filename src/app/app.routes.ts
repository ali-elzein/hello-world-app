import { Routes } from '@angular/router';

export const routes: Routes = [
//   { path: 'feature', loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule) },
  { path: '', redirectTo: '', pathMatch: 'full' }
];