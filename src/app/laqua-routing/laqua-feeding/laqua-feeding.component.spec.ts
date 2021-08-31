import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaquaFeedingComponent } from './laqua-feeding.component';

describe('LaquaFeedingComponent', () => {
  let component: LaquaFeedingComponent;
  let fixture: ComponentFixture<LaquaFeedingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaquaFeedingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaquaFeedingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
