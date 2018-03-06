import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaySingleRecordComponent } from './display-single-record.component';

describe('DisplaySingleRecordComponent', () => {
  let component: DisplaySingleRecordComponent;
  let fixture: ComponentFixture<DisplaySingleRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaySingleRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaySingleRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
