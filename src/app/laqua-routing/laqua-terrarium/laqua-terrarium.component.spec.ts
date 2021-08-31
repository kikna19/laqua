import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaquaTerrariumComponent } from './laqua-terrarium.component';

describe('LaquaTerrariumComponent', () => {
  let component: LaquaTerrariumComponent;
  let fixture: ComponentFixture<LaquaTerrariumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaquaTerrariumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaquaTerrariumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
