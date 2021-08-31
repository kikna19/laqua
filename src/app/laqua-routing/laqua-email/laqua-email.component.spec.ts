import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaquaEmailComponent } from './laqua-email.component';

describe('LaquaEmailComponent', () => {
  let component: LaquaEmailComponent;
  let fixture: ComponentFixture<LaquaEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaquaEmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaquaEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
