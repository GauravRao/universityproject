import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderService } from './header/header.service';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
	],
	declarations: [
		HeaderComponent,
		SidebarComponent,
		DashboardComponent,
	],
	exports: [
		HeaderComponent,
		SidebarComponent
	],
	providers: [HeaderService]
})
export class AppCommonModule { }
