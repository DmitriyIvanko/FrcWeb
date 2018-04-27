import { Component } from '@angular/core';

import { WebCamComponent } from 'ack-angular-webcam';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public webcam: WebCamComponent;
  public picture: string;

  public getPicture() {
    this.webcam.getBase64()
      .then((base64) => {
        this.picture = base64;
      });
  }
}
