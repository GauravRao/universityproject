import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { MembersComponent } from './members/members.component';
import { NotificationComponent } from './notification/notification.component';

const routes: Routes = [
	{ path: 'job', component: JobDetailComponent },
	{ path: 'members', component: MembersComponent },
	{ path: 'notify', component: NotificationComponent },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class MainRoutingModule { }
