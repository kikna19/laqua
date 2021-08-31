import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerrariumDemoComponent } from './terrarium-demo.component';

describe('TerrariumDemoComponent', () => {
  let component: TerrariumDemoComponent;
  let fixture: ComponentFixture<TerrariumDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerrariumDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerrariumDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
