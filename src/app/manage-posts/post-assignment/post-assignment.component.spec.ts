import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAssignmentComponent } from './post-assignment.component';

describe('PostAssignmentComponent', () => {
  let component: PostAssignmentComponent;
  let fixture: ComponentFixture<PostAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
