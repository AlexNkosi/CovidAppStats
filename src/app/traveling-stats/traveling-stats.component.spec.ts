import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelingStatsComponent } from './traveling-stats.component';

describe('TravelingStatsComponent', () => {
  let component: TravelingStatsComponent;
  let fixture: ComponentFixture<TravelingStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelingStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelingStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
