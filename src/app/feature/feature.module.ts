import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Component1 } from './components/component1/component1';
import { Component2 } from './components/component2/component2';
import { MyPipePipe } from './my-pipe-pipe';
import { FeatureRoutingModule } from './feature-routing.module';
import { UiButtonComponent } from '../shared/components/ui-button/ui-button';
import { SharedModule } from '../shared/shared-module';

@NgModule({
  imports: [
    CommonModule,
    FeatureRoutingModule,
    Component1,
    Component2,
    MyPipePipe,
    SharedModule
  ],
  exports: [
    Component1,
    Component2,
    SharedModule
  ]
})
export class FeatureModule { }
