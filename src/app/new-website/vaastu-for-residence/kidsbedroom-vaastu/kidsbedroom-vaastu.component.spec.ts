import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsbedroomVaastuComponent } from './kidsbedroom-vaastu.component';

describe('KidsbedroomVaastuComponent', () => {
  let component: KidsbedroomVaastuComponent;
  let fixture: ComponentFixture<KidsbedroomVaastuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KidsbedroomVaastuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KidsbedroomVaastuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
