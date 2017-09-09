import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostProjectComponent } from './post-project.component';

describe('PostProjectComponent', () => {
  let component: PostProjectComponent;
  let fixture: ComponentFixture<PostProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});