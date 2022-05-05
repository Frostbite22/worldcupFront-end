import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbitreDetailComponent } from './arbitre-detail.component';

describe('ArbitreDetailComponent', () => {
  let component: ArbitreDetailComponent;
  let fixture: ComponentFixture<ArbitreDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArbitreDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArbitreDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
