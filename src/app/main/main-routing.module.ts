import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { MembersComponent } from './members/members.component';
import { NotificationComponent } from './notification/notification.component';
import { MessageComponent } from './message/message.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { SearchComponent } from './search/search.component';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
  { path: 'job', component: JobDetailComponent },
  { path: 'members', component: MembersComponent },
  { path: 'notify', component: NotificationComponent },
  { path: 'message', component: MessageComponent },
  { path: 'search', component: SearchComponent },
  { path: 'newsfeed', component: NewsfeedComponent },
	{ path: 'chat', component: ChatComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
