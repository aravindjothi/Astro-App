import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsServiceComponent } from './cons-service.component';

describe('ConsServiceComponent', () => {
  let component: ConsServiceComponent;
  let fixture: ComponentFixture<ConsServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
