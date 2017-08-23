import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageUniversityComponent } from './manage-university.component';

describe('ManageUniversityComponent', () => {
  let component: ManageUniversityComponent;
  let fixture: ComponentFixture<ManageUniversityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageUniversityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageUniversityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
