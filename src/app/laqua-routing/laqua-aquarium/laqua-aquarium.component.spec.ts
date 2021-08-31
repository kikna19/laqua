import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaquaAquariumComponent } from './laqua-aquarium.component';

describe('LaquaAquariumComponent', () => {
  let component: LaquaAquariumComponent;
  let fixture: ComponentFixture<LaquaAquariumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaquaAquariumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaquaAquariumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
