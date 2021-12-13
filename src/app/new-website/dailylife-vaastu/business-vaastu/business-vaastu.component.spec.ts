import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessVaastuComponent } from './business-vaastu.component';

describe('BusinessVaastuComponent', () => {
  let component: BusinessVaastuComponent;
  let fixture: ComponentFixture<BusinessVaastuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessVaastuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessVaastuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
