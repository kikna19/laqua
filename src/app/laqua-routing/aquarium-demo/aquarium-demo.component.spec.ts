import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AquariumDemoComponent } from './aquarium-demo.component';

describe('AquariumDemoComponent', () => {
  let component: AquariumDemoComponent;
  let fixture: ComponentFixture<AquariumDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AquariumDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AquariumDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
