import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Component1 } from './components/component1/component1';
import { Component2 } from './components/component2/component2';
import { ImageLoaderComponent } from './components/image-loader/image-loader';

const routes: Routes = [
  { path: 'comp1', component: Component1 },
  { path: 'comp2', component: Component2 },
  { path: 'image', component: ImageLoaderComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
