import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GemstoneArticlesComponent } from './gemstone-articles.component';

describe('GemstoneArticlesComponent', () => {
  let component: GemstoneArticlesComponent;
  let fixture: ComponentFixture<GemstoneArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GemstoneArticlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GemstoneArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
