import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './entry/register/register.component';
import { SignUpComponent } from './entry/sign-up/sign-up.component';
import { LoginComponent } from './entry/login/login.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'register', pathMatch: 'full' },
  // { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'signup', component: SignUpComponent }
];

export const routing = RouterModule.forRoot(appRoutes);
