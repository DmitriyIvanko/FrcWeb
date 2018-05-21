export class FrsModel {
  public id: string;
  public md: string;

  constructor(obj?: Partial<FrsModel>) {
    this.id = obj && obj.id || null;
    this.md = obj && obj.md || "";
  }
}
