import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from '../app-common'
import { ManageUniversityComponent } from './manage-university/manage-university.component';
import { ManagePostComponent } from './manage-post/manage-post.component';


const routes: Routes = [
  {
    path: 'university', component: DashboardComponent, children: [{
      path: 'list', component: ManageUniversityComponent
    }]
  },
  {
    path: 'post', component: DashboardComponent, children: [{
      path: 'list', component: ManagePostComponent
    }]
  },
  // {
  //   path: 'dashboard', component: DashboardComponent, children: [{
  //     path: 'list', component: ManageUniversityComponent
  //   }]
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperAdminRouting { }
