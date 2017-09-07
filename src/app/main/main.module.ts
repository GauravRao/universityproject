import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { MembersComponent } from './members/members.component';
import { NotificationComponent } from './notification/notification.component';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule
  ],
  declarations: [JobDetailComponent, MembersComponent, NotificationComponent]
})
export class MainModule { }
