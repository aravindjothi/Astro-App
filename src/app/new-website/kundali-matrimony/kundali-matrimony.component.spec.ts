import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KundaliMatrimonyComponent } from './kundali-matrimony.component';

describe('KundaliMatrimonyComponent', () => {
  let component: KundaliMatrimonyComponent;
  let fixture: ComponentFixture<KundaliMatrimonyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KundaliMatrimonyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KundaliMatrimonyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
