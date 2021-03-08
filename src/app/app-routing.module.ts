import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './component/admin/admin.component';
import { ContentListComponent } from './component/content-list/content-list.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { PwresetComponent } from './component/pwreset/pwreset.component';
import { SignupComponent } from './component/signup/signup.component';
import { UserListComponent } from './component/user-list/user-list.component';
import { Role } from './model/role';
import { AuthGuardService } from './security/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'pwreset', component: PwresetComponent },
  { path: 'signup', component: SignupComponent },

  { path: 'admin', component: AdminComponent, canActivate: [AuthGuardService] },
  {
    path: 'content-list',
    component: ContentListComponent,
    canActivate: [AuthGuardService], data: { roles: [Role.Standard, Role.Administrator] }
  },
  {
    path: 'user-list',
    component: UserListComponent,
    canActivate: [AuthGuardService],
    data: { roles: [Role.Administrator] }
  },

  // invalid paths goes to home page
  { path: '**', redirectTo: 'home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
