import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ui-button',
  standalone : false,
  template: `
    <button 
      class="ui-button"
      [ngClass]="{
        'primary': variant === 'primary',
        'secondary': variant === 'secondary',
        'danger': variant === 'danger',
        'small': size === 'small',
        'medium': size === 'medium',
        'large': size === 'large',
        'disabled': disabled,
        'full-width': fullWidth
      }"
      [disabled]="disabled"
      (click)="handleClick($event)"
    >
      <span *ngIf="loading" class="spinner"></span>
      <ng-content></ng-content>
    </button>
  `,
  styleUrls: ['./ui-button.css'],
})
export class UiButtonComponent {
  @Input() variant: 'primary' | 'secondary' | 'danger' = 'primary';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() disabled = false;
  @Input() loading = false;
  @Input() fullWidth = false;
  @Output() clicked = new EventEmitter<Event>();

  handleClick(event: Event) {
    if (!this.disabled && !this.loading) {
      this.clicked.emit(event);
    }
  }
}