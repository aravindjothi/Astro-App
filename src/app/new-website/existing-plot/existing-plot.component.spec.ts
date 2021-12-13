import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingPlotComponent } from './existing-plot.component';

describe('ExistingPlotComponent', () => {
  let component: ExistingPlotComponent;
  let fixture: ComponentFixture<ExistingPlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExistingPlotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingPlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
