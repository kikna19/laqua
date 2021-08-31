import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaquaHomeComponent } from './laqua-home.component';

describe('LaquaHomeComponent', () => {
  let component: LaquaHomeComponent;
  let fixture: ComponentFixture<LaquaHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaquaHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaquaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
