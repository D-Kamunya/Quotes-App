import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesAppDisplayComponent } from './quotes-app-display/quotes-app-display.component';
import { QuotesAppFormComponent } from './quotes-app-form/quotes-app-form.component';

@NgModule({
  declarations: [
    AppComponent,
    QuotesAppDisplayComponent,
    QuotesAppFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
