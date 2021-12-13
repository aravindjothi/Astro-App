import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaastuBooksComponent } from './vaastu-books.component';

describe('VaastuBooksComponent', () => {
  let component: VaastuBooksComponent;
  let fixture: ComponentFixture<VaastuBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaastuBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaastuBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
