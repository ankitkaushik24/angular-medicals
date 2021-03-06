import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ResponsePopupComponent} from './response-popup/response-popup.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {CacheInterceptor} from './cache.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ResponsePopupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
