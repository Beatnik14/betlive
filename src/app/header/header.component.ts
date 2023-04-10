import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  selectedLang = 'ka';

  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'ka']), translate.setDefaultLang('ka');
  }

  ngOnInit(): void {}

  toggleLanguage(lang: string) {
    this.selectedLang = lang;
    this.translate.use(lang);
  }
}
