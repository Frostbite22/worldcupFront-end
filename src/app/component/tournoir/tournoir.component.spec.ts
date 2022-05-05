import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournoirComponent } from './tournoir.component';

describe('TournoirComponent', () => {
  let component: TournoirComponent;
  let fixture: ComponentFixture<TournoirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TournoirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TournoirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
