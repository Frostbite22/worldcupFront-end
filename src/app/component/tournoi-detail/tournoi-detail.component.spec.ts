import { ComponentFixture, TestBed } from '@angular/core/testing';

import { tournoiDetailComponent } from './tournoi-detail.component';

describe('tournoiDetailComponent', () => {
  let component: tournoiDetailComponent;
  let fixture: ComponentFixture<tournoiDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ tournoiDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(tournoiDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
