import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { OfferComponent } from './offer/offer.component';
import { OfferHeaderComponent } from './offer/offer-header/offer-header.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { OfferRulesComponent } from './offer/offer-rules/offer-rules.component';
import { OfferAccordionComponent } from './offer/offer-accordion/offer-accordion.component';
import { ScrollDirective } from './shared/scroll.directive';
import { OfferCarouselComponent } from './offer/offer-carousel/offer-carousel.component';
import { CarouselCardComponent } from './offer/offer-carousel/carousel-card/carousel-card.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OfferComponent,
    OfferHeaderComponent,
    OfferRulesComponent,
    OfferAccordionComponent,
    ScrollDirective,
    OfferCarouselComponent,
    CarouselCardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http)
}
