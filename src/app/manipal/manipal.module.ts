import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MdTabsModule} from '@angular/material';
import { ManipalRoutingModule } from './manipal-routing.module';
import { AboutComponent } from './about/about.component';
import { UpdatesComponent } from './updates/updates.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';


@NgModule({
  imports: [
    CommonModule,
    ManipalRoutingModule,
    AccordionModule.forRoot(),
    MdTabsModule
  ],
  declarations: [AboutComponent, UpdatesComponent]
})
export class ManipalModule { }
