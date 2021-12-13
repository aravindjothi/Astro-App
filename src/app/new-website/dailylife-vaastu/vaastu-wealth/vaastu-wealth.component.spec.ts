import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaastuWealthComponent } from './vaastu-wealth.component';

describe('VaastuWealthComponent', () => {
  let component: VaastuWealthComponent;
  let fixture: ComponentFixture<VaastuWealthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaastuWealthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaastuWealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
