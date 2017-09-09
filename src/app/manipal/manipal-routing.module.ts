import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { UpdatesComponent } from './updates/updates.component'
const routes: Routes = [
	{ path: 'about', component: AboutComponent },
	{ path: 'updates', component: UpdatesComponent },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ManipalRoutingModule { }
