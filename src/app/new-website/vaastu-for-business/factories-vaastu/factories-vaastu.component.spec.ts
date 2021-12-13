import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactoriesVaastuComponent } from './factories-vaastu.component';

describe('FactoriesVaastuComponent', () => {
  let component: FactoriesVaastuComponent;
  let fixture: ComponentFixture<FactoriesVaastuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactoriesVaastuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FactoriesVaastuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
