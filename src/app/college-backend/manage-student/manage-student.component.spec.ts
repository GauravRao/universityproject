import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageStudentComponent } from './manage-student.component';

describe('ManageStudentComponent', () => {
  let component: ManageStudentComponent;
  let fixture: ComponentFixture<ManageStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
