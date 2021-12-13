import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawingroomVaastuComponent } from './drawingroom-vaastu.component';

describe('DrawingroomVaastuComponent', () => {
  let component: DrawingroomVaastuComponent;
  let fixture: ComponentFixture<DrawingroomVaastuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrawingroomVaastuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawingroomVaastuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
