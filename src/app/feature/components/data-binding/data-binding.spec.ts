import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingComponent } from './data-binding';

describe('DataBinding', () => {
  let component: DataBindingComponent;
  let fixture: ComponentFixture<DataBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataBindingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
