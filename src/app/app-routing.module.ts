import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminUserComponent } from './component/admin-user/admin-user.component';
import { AdminComponent } from './component/admin/admin.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { PwresetComponent } from './component/pwreset/pwreset.component';
import { SignupComponent } from './component/signup/signup.component';
import { Role } from './model/role';
import { AuthGuardService } from './security/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'pwreset', component: PwresetComponent },
  { path: 'signup', component: SignupComponent },

  { path: 'admin', component: AdminComponent, canActivate: [AuthGuardService] },
  { path: 'admin-user', component: AdminUserComponent, canActivate: [AuthGuardService], data: { roles: [Role.Administrator] } },

  // invalid paths goes to home page
  { path: '**', redirectTo: 'home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
