import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenTableComponent } from './open-table.component';

describe('CreateUpdateTableComponent', () => {
  let component: OpenTableComponent;
  let fixture: ComponentFixture<OpenTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
