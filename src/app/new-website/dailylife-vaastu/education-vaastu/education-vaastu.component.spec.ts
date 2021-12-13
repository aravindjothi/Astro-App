import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationVaastuComponent } from './education-vaastu.component';

describe('EducationVaastuComponent', () => {
  let component: EducationVaastuComponent;
  let fixture: ComponentFixture<EducationVaastuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationVaastuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationVaastuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
