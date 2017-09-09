import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableModule } from "angular2-datatable";
import { ManageAdminsComponent } from './manage-admins/manage-admins.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { ManageStudentComponent } from './manage-student/manage-student.component';
import { CollegeBackendRoutingModule } from './college-backend-routing.module';
import { AddMemberComponent } from './add-member/add-member.component';
import { CourseComponent } from './course/course.component';
import { ManageSubjectsComponent } from './manage-subjects/manage-subjects.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    CollegeBackendRoutingModule,
    DataTableModule,
    FormsModule
  ],
  declarations: [AddMemberComponent, CourseComponent,
    ManageSubjectsComponent, AdminHeaderComponent,
    ManageAdminsComponent, ManageStudentComponent,
    AddTeacherComponent]
})
export class CollegeBackendModule { }
