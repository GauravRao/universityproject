import { NgModule, NO_ERRORS_SCHEMA }          from '@angular/core';
import { CommonModule } from '@angular/common';
import {SuperAdminRouting} from './super-admin.routing.module';
import { ManageUniversityComponent} from './manage-university/manage-university.component'
import { BrowserModule }            from '@angular/platform-browser';
import { DataTableModule }          from "angular2-datatable";
import { MdSnackBarModule, MdIconModule }     from '@angular/material';
import {MdTabsModule, MdButtonModule} from '@angular/material';
import { ManagePostComponent } from './manage-post/manage-post.component';

@NgModule({
  imports: [
    CommonModule,
    SuperAdminRouting,
    BrowserModule,
    DataTableModule,
    MdIconModule,
    MdTabsModule,
    MdButtonModule
  ],
  declarations: [ManageUniversityComponent, ManagePostComponent],
  schemas: [NO_ERRORS_SCHEMA],
  exports: [
    MdTabsModule
  ]
})
export class SuperAdminModule { }
