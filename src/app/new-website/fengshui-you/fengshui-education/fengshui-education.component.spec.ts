import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FengshuiEducationComponent } from './fengshui-education.component';

describe('FengshuiEducationComponent', () => {
  let component: FengshuiEducationComponent;
  let fixture: ComponentFixture<FengshuiEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FengshuiEducationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FengshuiEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
