import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalmistryServiceComponent } from './palmistry-service.component';

describe('PalmistryServiceComponent', () => {
  let component: PalmistryServiceComponent;
  let fixture: ComponentFixture<PalmistryServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PalmistryServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PalmistryServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
