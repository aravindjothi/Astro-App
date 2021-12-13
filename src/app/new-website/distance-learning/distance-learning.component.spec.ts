import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistanceLearningComponent } from './distance-learning.component';

describe('DistanceLearningComponent', () => {
  let component: DistanceLearningComponent;
  let fixture: ComponentFixture<DistanceLearningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistanceLearningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistanceLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
