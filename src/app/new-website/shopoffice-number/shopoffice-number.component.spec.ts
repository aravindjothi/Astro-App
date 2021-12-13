import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopofficeNumberComponent } from './shopoffice-number.component';

describe('ShopofficeNumberComponent', () => {
  let component: ShopofficeNumberComponent;
  let fixture: ComponentFixture<ShopofficeNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopofficeNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopofficeNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
