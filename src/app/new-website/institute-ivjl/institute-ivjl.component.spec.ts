import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituteIvjlComponent } from './institute-ivjl.component';

describe('InstituteIvjlComponent', () => {
  let component: InstituteIvjlComponent;
  let fixture: ComponentFixture<InstituteIvjlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstituteIvjlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstituteIvjlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
