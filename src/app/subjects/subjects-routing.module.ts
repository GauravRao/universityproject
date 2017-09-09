import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubjectComponent } from './subject/subject.component';

const routes: Routes = [
	{path:'subjects',component:SubjectComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectsRoutingModule { }
