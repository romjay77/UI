import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home';
import { UserComponent } from '../user';
import { LoginComponent } from '../login';
import { RegisterComponent } from '../register';
import { ProjectComponent } from '../project';
import { CookieComponent } from '../cookie';
import { AdminComponent } from '../admin';
import { ProjectListComponent } from '../projectlist';
import { AuthGuard } from '../_helpers';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user', component: UserComponent, canActivate: [AuthGuard] },
  { path: 'project', component: ProjectComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'cookie', component: CookieComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'listprojects/:id', component: ProjectListComponent, canActivate: [AuthGuard] },

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }