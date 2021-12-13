import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FengshuiHealthComponent } from './fengshui-health.component';

describe('FengshuiHealthComponent', () => {
  let component: FengshuiHealthComponent;
  let fixture: ComponentFixture<FengshuiHealthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FengshuiHealthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FengshuiHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
