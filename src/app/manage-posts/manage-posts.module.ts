import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagePostsRoutingModule } from './manage-posts-routing.module';
import { ReportComponent } from './report/report.component';
import { PostReportComponent } from './post-report/post-report.component';
import { PostAssignmentComponent } from './post-assignment/post-assignment.component';
import { SelectFileComponent } from './select-file/select-file.component';
import { PostNewsComponent } from './post-news/post-news.component';
import { PostProjectComponent } from './post-project/post-project.component';
import { PostEventComponent } from './post-event/post-event.component';
import { PostFileComponent } from './post-file/post-file.component';

@NgModule({
  imports: [
    CommonModule,
    ManagePostsRoutingModule
  ],
  declarations: [ReportComponent, PostReportComponent,
   PostAssignmentComponent, SelectFileComponent, PostNewsComponent, 
   PostProjectComponent, PostEventComponent, PostFileComponent]
})
export class ManagePostsModule { }
