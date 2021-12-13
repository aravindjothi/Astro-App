import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FengshuiArticlesComponent } from './fengshui-articles.component';

describe('FengshuiArticlesComponent', () => {
  let component: FengshuiArticlesComponent;
  let fixture: ComponentFixture<FengshuiArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FengshuiArticlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FengshuiArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
