import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

// import { fakeBackendProvider } from '../_helpers';

import { AppRoutingModule } from './app-routing.module';
import { JwtInterceptor, ErrorInterceptor } from '../_helpers';
import { AppComponent } from './app.component';
import { UserComponent } from '../user';
import { LoginComponent } from '../login';
import { HomeComponent } from '../home';
import { ProjectComponent } from '../project';
import { RegisterComponent } from '../register';
import { CookieComponent } from '../cookie';
import { AlertComponent } from '../_components';
import { ModalComponent } from '../_components';
import { UserDeleteComponent } from '../_components';
import { AdminComponent } from '../admin';
import { ProjectListComponent } from '../projectlist';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatRadioModule } from '@angular/material/radio';
import { CdkTableModule } from '@angular/cdk/table';
import { MatTableModule } from '@angular/material';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,

    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatTabsModule,
    MatSidenavModule,
    MatRadioModule,
    CdkTableModule,
    MatTableModule,
    MatSlideToggleModule
  ],
  declarations: [
    AppComponent,
    CookieComponent,
    UserComponent,
    LoginComponent,
    ProjectComponent,
    RegisterComponent,
    AlertComponent,
    HomeComponent,
    ModalComponent,
    AdminComponent,
    UserDeleteComponent,
    ProjectListComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    CookieService

    // fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { };