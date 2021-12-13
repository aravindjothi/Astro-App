import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FengshuiOfficeComponent } from './fengshui-office.component';

describe('FengshuiOfficeComponent', () => {
  let component: FengshuiOfficeComponent;
  let fixture: ComponentFixture<FengshuiOfficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FengshuiOfficeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FengshuiOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
