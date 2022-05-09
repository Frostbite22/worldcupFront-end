import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournoiDetailComponent } from './tournoi-detail.component';

describe('TournoiDetailComponent', () => {
  let component: TournoiDetailComponent;
  let fixture: ComponentFixture<TournoiDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TournoiDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TournoiDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
