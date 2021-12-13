import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationalVaastuComponent } from './educational-vaastu.component';

describe('EducationalVaastuComponent', () => {
  let component: EducationalVaastuComponent;
  let fixture: ComponentFixture<EducationalVaastuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationalVaastuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationalVaastuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
