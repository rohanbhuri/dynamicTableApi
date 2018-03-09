import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditArrayComponent } from './add-edit-array.component';

describe('AddEditArrayComponent', () => {
  let component: AddEditArrayComponent;
  let fixture: ComponentFixture<AddEditArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
