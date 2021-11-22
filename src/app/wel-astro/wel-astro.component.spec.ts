import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelAstroComponent } from './wel-astro.component';

describe('WelAstroComponent', () => {
  let component: WelAstroComponent;
  let fixture: ComponentFixture<WelAstroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelAstroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelAstroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
