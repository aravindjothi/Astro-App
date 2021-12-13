import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PyravaastuArticlesComponent } from './pyravaastu-articles.component';

describe('PyravaastuArticlesComponent', () => {
  let component: PyravaastuArticlesComponent;
  let fixture: ComponentFixture<PyravaastuArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PyravaastuArticlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PyravaastuArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
