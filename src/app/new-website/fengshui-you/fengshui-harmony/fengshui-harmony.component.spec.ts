import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FengshuiHarmonyComponent } from './fengshui-harmony.component';

describe('FengshuiHarmonyComponent', () => {
  let component: FengshuiHarmonyComponent;
  let fixture: ComponentFixture<FengshuiHarmonyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FengshuiHarmonyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FengshuiHarmonyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
