import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StadeDetailComponent } from './stade-detail.component';

describe('StadeDetailComponent', () => {
  let component: StadeDetailComponent;
  let fixture: ComponentFixture<StadeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StadeDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StadeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
