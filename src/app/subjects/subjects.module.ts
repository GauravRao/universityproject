import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MdTabsModule} from '@angular/material';
import { SubjectsRoutingModule } from './subjects-routing.module';
import { SubjectComponent } from './subject/subject.component';

@NgModule({
  imports: [
    CommonModule,
    SubjectsRoutingModule,
    MdTabsModule
  ],
  declarations: [SubjectComponent]
})
export class SubjectsModule { }
