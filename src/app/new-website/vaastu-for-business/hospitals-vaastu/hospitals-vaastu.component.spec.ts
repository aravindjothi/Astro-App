import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalsVaastuComponent } from './hospitals-vaastu.component';

describe('HospitalsVaastuComponent', () => {
  let component: HospitalsVaastuComponent;
  let fixture: ComponentFixture<HospitalsVaastuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalsVaastuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalsVaastuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
