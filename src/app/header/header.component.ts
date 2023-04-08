import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  selectedLang = 'KA';

  constructor() {}

  ngOnInit(): void {}

  toggleLanguage(lang: string) {
    this.selectedLang = lang;
  }
}
