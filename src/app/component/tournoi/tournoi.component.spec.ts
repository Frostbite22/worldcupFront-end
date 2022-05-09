import { ComponentFixture, TestBed } from '@angular/core/testing';

import { tournoiComponent } from './tournoi.component';

describe('tournoiComponent', () => {
  let component: tournoiComponent;
  let fixture: ComponentFixture<tournoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ tournoiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(tournoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
