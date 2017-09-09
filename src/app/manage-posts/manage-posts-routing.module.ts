import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportComponent } from './report/report.component';
import { PostReportComponent } from './post-report/post-report.component';
import { PostAssignmentComponent } from './post-assignment/post-assignment.component';
import { SelectFileComponent } from './select-file/select-file.component';
import { PostNewsComponent } from './post-news/post-news.component';
import { PostProjectComponent } from './post-project/post-project.component';
import { PostEventComponent } from './post-event/post-event.component';
import { PostFileComponent } from './post-file/post-file.component';

const routes: Routes = [
	{
		path: 'enterReport', component: ReportComponent
	},
	{
		path: 'postFile', component: PostFileComponent
	},
	{
		path: 'postEvent', component: PostEventComponent
	},
	{
		path: 'postProject', component: PostProjectComponent
	},
	{
		path: 'postNews', component: PostNewsComponent
	},
	{
		path: 'postReport', component: PostReportComponent
	},
	{
		path: 'postAssignement', component: PostAssignmentComponent
	},
	{
		path: 'selectFile', component: SelectFileComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ManagePostsRoutingModule { }
