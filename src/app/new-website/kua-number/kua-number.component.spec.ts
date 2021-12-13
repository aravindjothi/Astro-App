import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KuaNumberComponent } from './kua-number.component';

describe('KuaNumberComponent', () => {
  let component: KuaNumberComponent;
  let fixture: ComponentFixture<KuaNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KuaNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KuaNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
