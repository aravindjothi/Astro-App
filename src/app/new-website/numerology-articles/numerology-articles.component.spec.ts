import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumerologyArticlesComponent } from './numerology-articles.component';

describe('NumerologyArticlesComponent', () => {
  let component: NumerologyArticlesComponent;
  let fixture: ComponentFixture<NumerologyArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumerologyArticlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumerologyArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
