import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './entry/register/register.component';

const appRoutes: Routes = [
	{ path: '', redirectTo: 'login', pathMatch: 'full' },
	{ path: 'register', component: RegisterComponent }
];

export const routing = RouterModule.forRoot(appRoutes);
