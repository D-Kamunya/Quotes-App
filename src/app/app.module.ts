import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesAppDisplayComponent } from './quotes-app-display/quotes-app-display.component';
import { QuotesAppFormComponent } from './quotes-app-form/quotes-app-form.component';
import { QuotesAppHeaderComponent } from './quotes-app-header/quotes-app-header.component';
import { QuotesAppFooterComponent } from './quotes-app-footer/quotes-app-footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    QuotesAppDisplayComponent,
    QuotesAppFormComponent,
    QuotesAppHeaderComponent,
    QuotesAppFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
