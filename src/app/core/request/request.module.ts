import { NgModule } from "@angular/core";

import { RequestHandler } from "./request.handler";

@NgModule({
  providers: [
    RequestHandler,
  ],
})
export class RequestModule { }
