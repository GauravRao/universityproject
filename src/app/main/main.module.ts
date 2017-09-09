import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { MembersComponent } from './members/members.component';
import { NotificationComponent } from './notification/notification.component';
import { MessageComponent } from './message/message.component';
import { NewsfeedComponent } from './/newsfeed/newsfeed.component';
import { SearchComponent } from './search/search.component';
import {MdTabsModule} from '@angular/material';
import { ChatComponent } from './chat/chat.component';


@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    MdTabsModule
  ],
  declarations: [
    JobDetailComponent,
    MembersComponent,
    NotificationComponent,
    MessageComponent,
    NewsfeedComponent,
    SearchComponent,
    ChatComponent
  ]
})
export class MainModule { }
