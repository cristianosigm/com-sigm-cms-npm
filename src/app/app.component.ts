import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Digital Agency CMS';
  constructor(public translate: TranslateService) {
    translate.addLangs(['pt-BR']);
    translate.setDefaultLang('pt-BR');
  }
}
