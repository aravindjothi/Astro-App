import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentialVaastuComponent } from './residential-vaastu.component';

describe('ResidentialVaastuComponent', () => {
  let component: ResidentialVaastuComponent;
  let fixture: ComponentFixture<ResidentialVaastuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResidentialVaastuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidentialVaastuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
