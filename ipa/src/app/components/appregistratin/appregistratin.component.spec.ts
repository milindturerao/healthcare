import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppregistratinComponent } from './appregistratin.component';

describe('AppregistratinComponent', () => {
  let component: AppregistratinComponent;
  let fixture: ComponentFixture<AppregistratinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppregistratinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppregistratinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
