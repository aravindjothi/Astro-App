import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FengshuiWealthComponent } from './fengshui-wealth.component';

describe('FengshuiWealthComponent', () => {
  let component: FengshuiWealthComponent;
  let fixture: ComponentFixture<FengshuiWealthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FengshuiWealthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FengshuiWealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
