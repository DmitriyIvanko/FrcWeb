import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { WebCamModule } from "ack-angular-webcam";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { AdminModule } from "./admin";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AdminModule,
    BrowserModule,
    WebCamModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
