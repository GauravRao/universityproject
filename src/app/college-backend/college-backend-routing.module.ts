import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMemberComponent } from './add-member/add-member.component'
import { CourseComponent } from './course/course.component';
import { ManageAdminsComponent } from './manage-admins/manage-admins.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { ManageStudentComponent } from './manage-student/manage-student.component';

const routes: Routes = [{
  path: "addMembers", component: AddMemberComponent
},
{ path: "course", component: CourseComponent },
{
  path: 'addAdmin', component: ManageAdminsComponent,
  children: [
    { path: 'list', component: ManageAdminsComponent },
  ]
},
{
  path: 'addTeacher', component: AddTeacherComponent,
  children: [
    { path: 'list', component: AddTeacherComponent },
  ]
},
{
  path: 'addStudent', component: ManageStudentComponent,
  children: [
    { path: 'list', component: ManageStudentComponent },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollegeBackendRoutingModule { }
