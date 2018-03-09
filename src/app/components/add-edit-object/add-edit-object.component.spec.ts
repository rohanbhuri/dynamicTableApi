import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditObjectComponent } from './add-edit-object.component';

describe('AddEditObjectComponent', () => {
  let component: AddEditObjectComponent;
  let fixture: ComponentFixture<AddEditObjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditObjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
