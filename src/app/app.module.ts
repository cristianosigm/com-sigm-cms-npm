import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './component/signup/signup.component';
import { HomeComponent } from './component/home/home.component';
import { AdminHeaderComponent } from './component/admin-header/admin-header.component';
import { AdminComponent } from './component/admin/admin.component';
import { ContentComponent } from './component/content/content.component';
import { SigninComponent } from './component/signin/signin.component';
import { AdminContentComponent } from './component/admin-content/admin-content.component';
import { AdminUsersComponent } from './component/admin-users/admin-users.component';
import { PublicHeaderComponent } from './component/public-header/public-header.component';
import { PublicFooterComponent } from './component/public-footer/public-footer.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    HomeComponent,
    AdminHeaderComponent,
    AdminComponent,
    ContentComponent,
    SigninComponent,
    AdminContentComponent,
    AdminUsersComponent,
    PublicHeaderComponent,
    PublicFooterComponent
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

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
