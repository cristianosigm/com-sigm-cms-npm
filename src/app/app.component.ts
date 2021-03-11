import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  curUser!: User;
  title = 'Digital Agency CMS';

  constructor(public translate: TranslateService) {
    translate.addLangs(['en-US', 'pt-BR']);
    translate.setDefaultLang('en-US');
  }

}
