import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JouerDetailComponent } from './jouer-detail.component';

describe('JouerDetailComponent', () => {
  let component: JouerDetailComponent;
  let fixture: ComponentFixture<JouerDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JouerDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JouerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
