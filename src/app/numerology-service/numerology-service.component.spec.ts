import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumerologyServiceComponent } from './numerology-service.component';

describe('NumerologyServiceComponent', () => {
  let component: NumerologyServiceComponent;
  let fixture: ComponentFixture<NumerologyServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumerologyServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumerologyServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
