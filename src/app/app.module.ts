import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AdComponent } from './ad/ad.component';
import { AdHeaderComponent } from './ad/ad-header/ad-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdComponent,
    AdHeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
