import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopsVaastuComponent } from './shops-vaastu.component';

describe('ShopsVaastuComponent', () => {
  let component: ShopsVaastuComponent;
  let fixture: ComponentFixture<ShopsVaastuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopsVaastuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopsVaastuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
