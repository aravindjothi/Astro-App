import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaastuArticlesComponent } from './vaastu-articles.component';

describe('VaastuArticlesComponent', () => {
  let component: VaastuArticlesComponent;
  let fixture: ComponentFixture<VaastuArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaastuArticlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaastuArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
