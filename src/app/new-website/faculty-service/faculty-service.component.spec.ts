import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyServiceComponent } from './faculty-service.component';

describe('FacultyServiceComponent', () => {
  let component: FacultyServiceComponent;
  let fixture: ComponentFixture<FacultyServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
