import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterbedroomVaastuComponent } from './masterbedroom-vaastu.component';

describe('MasterbedroomVaastuComponent', () => {
  let component: MasterbedroomVaastuComponent;
  let fixture: ComponentFixture<MasterbedroomVaastuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterbedroomVaastuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterbedroomVaastuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
