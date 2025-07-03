import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Component1 } from './components/component1/component1';
import { Component2 } from './components/component2/component2';
import { MyPipePipe } from './my-pipe-pipe';
import { FeatureRoutingModule } from './feature-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FeatureRoutingModule,
    Component1,
    Component2,
    MyPipePipe
  ],
  exports: [
    Component1,
    Component2
  ]
})
export class FeatureModule { }
