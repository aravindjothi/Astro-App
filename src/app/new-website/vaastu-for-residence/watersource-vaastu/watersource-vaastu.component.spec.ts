import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatersourceVaastuComponent } from './watersource-vaastu.component';

describe('WatersourceVaastuComponent', () => {
  let component: WatersourceVaastuComponent;
  let fixture: ComponentFixture<WatersourceVaastuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatersourceVaastuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WatersourceVaastuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
