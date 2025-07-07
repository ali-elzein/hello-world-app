import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiButtonComponent } from './components/ui-button/ui-button';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations : [UiButtonComponent],
  exports : [UiButtonComponent]
})
export class SharedModule { }
