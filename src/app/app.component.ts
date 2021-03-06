import { Component } from '@angular/core';
import {
  Http,
  Request,
  Response,
} from "@angular/http";
import { Observable } from "rxjs/Observable";

import { WebCamComponent } from 'ack-angular-webcam';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    public webcam: WebCamComponent;
    public picture: string;

    constructor(
      private http: Http,
    ) { }

    public request(): Observable<any> {
      const request = new Request({
        method: "POST",
        url: `http://localhost:1752/api/login/sign-in`,
      });

      return this.http.request(request);
    }

    public getPicture() {
      // this.request().subscribe((result) => {
      //   debugger;
      // })

      // this.webcam.getBase64()
      //   .then((base64) => {
      //     this.picture = base64;
      //   });

      this.webcam.captureAsFormData({ fileName: 'file.jpg' })
        .then(formData => this.postFormData(formData))
        .catch(e => console.error(e));
    }

    public postFormData(formData) {
      const config = {
        method: "post",
        url: "http://localhost:1752/api/login/sign-in",
        body: formData
      }

      const request = new Request(config)

      return this.http.request(request).subscribe()
    }
}
