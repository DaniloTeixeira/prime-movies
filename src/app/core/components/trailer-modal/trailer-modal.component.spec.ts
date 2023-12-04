import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailerModalComponent } from './trailer-modal.component';

describe('TrailerModalComponent', () => {
  let component: TrailerModalComponent;
  let fixture: ComponentFixture<TrailerModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrailerModalComponent]
    });
    fixture = TestBed.createComponent(TrailerModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
