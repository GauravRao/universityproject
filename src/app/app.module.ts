import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { SuperAdminModule } from './super-admin/super-admin.module';
import { AppCommonModule } from './app-common/app-common.module';
import { MdSnackBarModule, } from '@angular/material';
import { LoginComponent } from './entry/login/login.component';
import { RegisterComponent } from './entry/register/register.component';
import { SignUpComponent } from './entry/sign-up/sign-up.component';
import { CollegeBackendModule } from './college-backend/college-backend.module';
import { ManagePostsModule } from './manage-posts/manage-posts.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { ManipalModule } from './manipal/manipal.module';

import 'hammerjs';
import { OtpComponent } from './entry/otp/otp.component';
import { ContactComponent } from './entry/contact/contact.component';
import { MainModule } from './main/main.module';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SignUpComponent,
    OtpComponent,
    ContactComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    BsDropdownModule.forRoot(),
    NgxIntlTelInputModule,
    routing,
    SuperAdminModule,
    MainModule,
    CollegeBackendModule,
    MdSnackBarModule,
    AppCommonModule,
    BrowserAnimationsModule,
    ManagePostsModule,
    ManipalModule
  ],
  providers: [
    // DataService,
    // AuthGuard
  ],
  schemas: [NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
