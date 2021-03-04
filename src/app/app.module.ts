import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { AdminComponent } from './component/admin/admin.component';
import { AdminContentComponent } from './component/admin-content/admin-content.component';
import { AdminHeaderComponent } from './component/admin-header/admin-header.component';
import { AdminUsersComponent } from './component/admin-users/admin-users.component';
import { ContentComponent } from './component/content/content.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { PublicFooterComponent } from './component/public-footer/public-footer.component';
import { SignupComponent } from './component/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,

    AdminComponent,
    AdminContentComponent,
    AdminHeaderComponent,
    AdminUsersComponent,
    ContentComponent,
    HomeComponent,
    LoginComponent,
    PublicFooterComponent,
    SignupComponent
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function httpTranslateLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
