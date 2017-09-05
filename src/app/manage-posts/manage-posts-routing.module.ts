import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportComponent } from './report/report.component';
import { PostReportComponent } from './post-report/post-report.component';
import { PostAssignmentComponent } from './post-assignment/post-assignment.component';

const routes: Routes = [
	{
		path: 'enterReport', component: ReportComponent
	},
	{
		path: 'postReport', component: PostReportComponent
	},
	{
		path:'postAssignement', component:PostAssignmentComponent
	}];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ManagePostsRoutingModule { }
