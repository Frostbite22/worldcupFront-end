import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournoirDetailComponent } from './tournoir-detail.component';

describe('TournoirDetailComponent', () => {
  let component: TournoirDetailComponent;
  let fixture: ComponentFixture<TournoirDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TournoirDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TournoirDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
