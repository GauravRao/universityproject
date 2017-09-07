import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './entry/register/register.component';
import { SignUpComponent } from './entry/sign-up/sign-up.component';
import { LoginComponent } from './entry/login/login.component';
import { OtpComponent } from './entry/otp/otp.component';
import { ContactComponent } from './entry/contact/contact.component';
import { PostMenuComponent } from './app-common/post-menu/post-menu.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'otp', component: OtpComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'menu', component: PostMenuComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'signup', component: SignUpComponent }
];

export const routing = RouterModule.forRoot(appRoutes);
