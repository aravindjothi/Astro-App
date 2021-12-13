import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanksVaastuComponent } from './banks-vaastu.component';

describe('BanksVaastuComponent', () => {
  let component: BanksVaastuComponent;
  let fixture: ComponentFixture<BanksVaastuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BanksVaastuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BanksVaastuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
