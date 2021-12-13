import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HindiBooksComponent } from './hindi-books.component';

describe('HindiBooksComponent', () => {
  let component: HindiBooksComponent;
  let fixture: ComponentFixture<HindiBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HindiBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HindiBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
