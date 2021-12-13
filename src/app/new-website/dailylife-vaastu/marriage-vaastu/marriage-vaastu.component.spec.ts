import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarriageVaastuComponent } from './marriage-vaastu.component';

describe('MarriageVaastuComponent', () => {
  let component: MarriageVaastuComponent;
  let fixture: ComponentFixture<MarriageVaastuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarriageVaastuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarriageVaastuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
