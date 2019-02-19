import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpRequestsService } from './http-requests.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BitcoinDetailComponent } from './bitcoin-detail/bitcoin-detail.component';
import { BitcoinsListComponent } from './bitcoins-list/bitcoins-list.component';


@NgModule({
  declarations: [
    AppComponent,
    BitcoinDetailComponent,
    BitcoinsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpRequestsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
