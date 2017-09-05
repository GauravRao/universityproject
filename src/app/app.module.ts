import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { SuperAdminModule } from './super-admin/super-admin.module';
import { AppCommonModule } from './app-common/app-common.module';
import { MdSnackBarModule, } from '@angular/material';
import { LoginComponent } from './entry/login/login.component';
import { RegisterComponent } from './entry/register/register.component';
import { SignUpComponent } from './entry/sign-up/sign-up.component';
import {CollegeBackendModule} from './college-backend/college-backend.module';
import {ManagePostsModule} from './manage-posts/manage-posts.module';
import 'hammerjs';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SignUpComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    SuperAdminModule,
    CollegeBackendModule,
    MdSnackBarModule,
    AppCommonModule,
    BrowserAnimationsModule,
    ManagePostsModule
  ],
  providers: [
    // DataService,
    // AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
