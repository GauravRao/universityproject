import { BrowserModule }                    from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule }                         from '@angular/core';
import { HttpModule }                       from '@angular/http';
import { routing }                          from './app.routing';
import { AppComponent }                     from './app.component';
// import { DataService }                      from './utils';
import { SuperAdminModule }                  from './super-admin/super-admin.module';
import { AppCommonModule }                        from './app-common/app-common.module';
import { MdSnackBarModule, }                 from '@angular/material';
import 'hammerjs';
import { LoginComponent } from './entry/login/login.component';
import { RegisterComponent } from './entry/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    SuperAdminModule,
    MdSnackBarModule,
    AppCommonModule,
    BrowserAnimationsModule
  ],
  providers: [
    // DataService,
    // AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
