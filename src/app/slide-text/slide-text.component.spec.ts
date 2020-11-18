import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideTextComponent } from './slide-text.component';

describe('SlideTextComponent', () => {
  let component: SlideTextComponent;
  let fixture: ComponentFixture<SlideTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlideTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
