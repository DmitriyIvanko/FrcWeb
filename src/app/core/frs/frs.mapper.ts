import { MapperModel } from "../utils/mapper.model";
import { FrsModel } from "./frs.model";

export class FrsMapper extends MapperModel<FrsModel, any> {
  public transformToClient(response: any): FrsModel {
    return new FrsModel({
      id: response.Id,
      md: response.Md,
    });
  }
}

