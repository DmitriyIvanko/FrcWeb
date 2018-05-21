import {
  Component,
  OnInit,
} from "@angular/core";
import { Observable } from "rxjs/Observable";

import {
  FrsService,
  FrsModel,
} from "../core";

@Component({
  selector: "ab-admin",
  templateUrl: "./admin.template.html",
  styleUrls: ['./admin.css'],
})
export class AdminComponent implements OnInit {
  public frsList$: Observable<FrsModel[]>;

  constructor(
    private frsService: FrsService,
  ) { }

  public ngOnInit(): void {
    this.frsList$ = this.frsService.getFrsList();
  }
}
