import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagePostsRoutingModule } from './manage-posts-routing.module';
import { ReportComponent } from './report/report.component';
import { PostReportComponent } from './post-report/post-report.component';
import { PostAssignmentComponent } from './post-assignment/post-assignment.component';

@NgModule({
  imports: [
    CommonModule,
    ManagePostsRoutingModule
  ],
  declarations: [ReportComponent, PostReportComponent, PostAssignmentComponent]
})
export class ManagePostsModule { }
