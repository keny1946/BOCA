import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LenguageComponent } from './lenguage.component';

describe('LenguageComponent', () => {
  let component: LenguageComponent;
  let fixture: ComponentFixture<LenguageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LenguageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LenguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
