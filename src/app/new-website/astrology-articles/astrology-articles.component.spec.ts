import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstrologyArticlesComponent } from './astrology-articles.component';

describe('AstrologyArticlesComponent', () => {
  let component: AstrologyArticlesComponent;
  let fixture: ComponentFixture<AstrologyArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AstrologyArticlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AstrologyArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
