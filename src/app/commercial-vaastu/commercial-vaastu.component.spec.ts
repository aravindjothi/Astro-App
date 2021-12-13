import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialVaastuComponent } from './commercial-vaastu.component';

describe('CommercialVaastuComponent', () => {
  let component: CommercialVaastuComponent;
  let fixture: ComponentFixture<CommercialVaastuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommercialVaastuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommercialVaastuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
