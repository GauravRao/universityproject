import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManipalRoutingModule } from './manipal-routing.module';
import { AboutComponent } from './about/about.component';

@NgModule({
  imports: [
    CommonModule,
    ManipalRoutingModule
  ],
  declarations: [AboutComponent]
})
export class ManipalModule { }
