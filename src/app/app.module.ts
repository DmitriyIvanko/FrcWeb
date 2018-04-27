import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WebCamModule } from 'ack-angular-webcam';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WebCamModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
