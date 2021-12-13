import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardsHonoursComponent } from './awards-honours.component';

describe('AwardsHonoursComponent', () => {
  let component: AwardsHonoursComponent;
  let fixture: ComponentFixture<AwardsHonoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwardsHonoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AwardsHonoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
