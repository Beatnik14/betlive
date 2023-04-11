import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-offer-rules',
  templateUrl: './offer-rules.component.html',
  styleUrls: ['./offer-rules.component.scss']
})
export class OfferRulesComponent implements OnInit {

  title = this.translate.get('Rules.HeaderPrimary') ;
  constructor(private translate: TranslateService) {}
  ngOnInit(): void {
    console.log(this.title)
  }

}
