import { Injectable } from "@angular/core";
import {
  Http,
  Request,
  Response,
} from "@angular/http";
import { AsyncSubject } from "rxjs/AsyncSubject";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';

import { AppSettings } from "../../app.settings";

@Injectable()
export class RequestHandler {
  constructor(
    private http: Http,
  ) { }

  public request(request: Request): Observable<any> {
    request.url = AppSettings.connectionString + request.url;

    return this.http.request(request).map((response) => {
      return response.json();
    });
  }
}
