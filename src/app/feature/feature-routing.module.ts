import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlTree } from '@angular/router';
import { Component1 } from './components/component1/component1';
import { Component2 } from './components/component2/component2';
import { ImageLoaderComponent } from './components/image-loader/image-loader';
import { LoginComponent } from '../auth/components/login/login.component';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { MessageResolver } from './message.resolver';
import { AuthGuard } from '../auth/guards/auth.guard'

const routes: Routes = [
//   { path: 'comp1', component: Component1 },
  {
    path: 'comp1',
    component: Component1,
    resolve: {
      message: MessageResolver
    }
  },
  { path: 'comp2', component: Component2, canActivate: [AuthGuard] },
  { 
    path: 'image',
    component: ImageLoaderComponent,
    canActivate: [AuthGuard]
    // children: [
    //   { path: 'comp1', component: Component1,
    //     resolve: {
    //         message: MessageResolver
    //     }
    //    }
    // ]
  },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }