import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { AdminComponent } from './component/admin/admin.component';
import { AdminHeaderComponent } from './component/admin-header/admin-header.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { PublicFooterComponent } from './component/public-footer/public-footer.component';
import { SignupComponent } from './component/signup/signup.component';
import { ContentListComponent } from './component/content-list/content-list.component';
import { UserListComponent } from './component/user-list/user-list.component';
import { ProfileComponent } from './component/profile/profile.component';
// import { ErrorInterceptor } from './security/error.interceptor';
import { AuthInterceptor } from './security/auth.interceptor';
import { ContentCreateComponent } from './component/content-create/content-create.component';
import { ContentUpdateComponent } from './component/content-update/content-update.component';
import { UserCreateComponent } from './component/user-create/user-create.component';
import { UserUpdateComponent } from './component/user-update/user-update.component';
import { ResetRequestComponent } from './component/reset-request/reset-request.component';
import { ResetFormComponent } from './component/reset-form/reset-form.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AdminHeaderComponent,
    HomeComponent,
    LoginComponent,
    PublicFooterComponent,
    SignupComponent,
    ResetRequestComponent,
    ContentListComponent,
    UserListComponent,
    ProfileComponent,
    ContentCreateComponent,
    ContentUpdateComponent,
    UserCreateComponent,
    UserUpdateComponent,
    ResetRequestComponent,
    ResetFormComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    })

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function httpTranslateLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
