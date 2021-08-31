import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaquaNavComponent } from './laqua-nav.component';

describe('LaquaNavComponent', () => {
  let component: LaquaNavComponent;
  let fixture: ComponentFixture<LaquaNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaquaNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaquaNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
