import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionCurriculumComponent } from './admission-curriculum.component';

describe('AdmissionCurriculumComponent', () => {
  let component: AdmissionCurriculumComponent;
  let fixture: ComponentFixture<AdmissionCurriculumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmissionCurriculumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionCurriculumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
