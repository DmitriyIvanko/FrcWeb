import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import {
  Headers,
  Request,
  RequestMethod,
} from "@angular/http";

import { FrsMapper } from "./frs.mapper";
import { FrsModel } from "./frs.model";
import { RequestHandler } from "../request/request.handler";

@Injectable()
export class FrsService {
  private frsMapper: FrsMapper;

  constructor(
    private requestHandler: RequestHandler,
  ) {
    this.frsMapper = new FrsMapper();
  }

  public getFrsList(): Observable<FrsModel[]> {
    const request = new Request({
      method: RequestMethod.Get,
      url: "api/frs/getfrslist",
    });

    return this.requestHandler.request(request).map((response) => {
      return this.frsMapper.mapCollectionToServer(response);
    });

  }
}
