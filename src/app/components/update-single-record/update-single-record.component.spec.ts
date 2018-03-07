import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSingleRecordComponent } from './update-single-record.component';

describe('DisplaySingleRecordComponent', () => {
  let component: UpdateSingleRecordComponent;
  let fixture: ComponentFixture<UpdateSingleRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateSingleRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSingleRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
