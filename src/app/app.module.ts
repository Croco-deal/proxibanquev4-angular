import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SurveyComponent } from './survey/survey.component';
import { QuotationComponent } from './quotation/quotation.component';

@NgModule({
  declarations: [
    AppComponent,
    SurveyComponent,
    QuotationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
