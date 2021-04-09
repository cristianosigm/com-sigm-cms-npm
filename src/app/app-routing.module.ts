import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './component/admin/admin.component';
import { ContentListComponent } from './component/content-list/content-list.component';
import { ContentCreateComponent } from './component/content-create/content-create.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { ProfileComponent } from './component/profile/profile.component';
import { SignupComponent } from './component/signup/signup.component';
import { UserListComponent } from './component/user-list/user-list.component';
import { UserCreateComponent } from './component/user-create/user-create.component';
import { Role } from './model/role';
import { AuthGuardService } from './security/auth-guard.service';
import { ContentUpdateComponent } from './component/content-update/content-update.component';
import { UserUpdateComponent } from './component/user-update/user-update.component';
import { ResetRequestComponent } from './component/reset-request/reset-request.component';
import { ResetFormComponent } from './component/reset-form/reset-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // public areas
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'reset-request', component: ResetRequestComponent },
  { path: 'reset-form/:email/:key', component: ResetFormComponent },
  { path: 'signup', component: SignupComponent },
  // restricted areas
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuardService] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService] },
  { path: 'content-list', component: ContentListComponent, canActivate: [AuthGuardService] },
  { path: 'content-create', component: ContentCreateComponent, canActivate: [AuthGuardService] },
  { path: 'content-update/:id', component: ContentUpdateComponent, canActivate: [AuthGuardService] },
  // admin areas
  { path: 'user-list', component: UserListComponent, canActivate: [AuthGuardService], data: { roles: [Role.Administrator] } },
  { path: 'user-create', component: UserCreateComponent, canActivate: [AuthGuardService], data: { roles: [Role.Administrator] } },
  { path: 'user-update/:id', component: UserUpdateComponent, canActivate: [AuthGuardService], data: { roles: [Role.Administrator] } },
  // invalid paths goes to home page
  { path: '**', redirectTo: 'home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
