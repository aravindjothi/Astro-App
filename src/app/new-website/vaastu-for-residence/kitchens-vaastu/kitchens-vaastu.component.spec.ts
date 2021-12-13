import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchensVaastuComponent } from './kitchens-vaastu.component';

describe('KitchensVaastuComponent', () => {
  let component: KitchensVaastuComponent;
  let fixture: ComponentFixture<KitchensVaastuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KitchensVaastuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KitchensVaastuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
