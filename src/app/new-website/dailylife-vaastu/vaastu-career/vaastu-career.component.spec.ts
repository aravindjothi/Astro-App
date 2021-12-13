import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaastuCareerComponent } from './vaastu-career.component';

describe('VaastuCareerComponent', () => {
  let component: VaastuCareerComponent;
  let fixture: ComponentFixture<VaastuCareerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaastuCareerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaastuCareerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
