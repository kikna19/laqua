import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedingDemoComponent } from './feeding-demo.component';

describe('FeedingDemoComponent', () => {
  let component: FeedingDemoComponent;
  let fixture: ComponentFixture<FeedingDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedingDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedingDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
