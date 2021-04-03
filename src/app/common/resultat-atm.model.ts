export class ResultatAtm {
  public degrees: number;
  public iconId: number;
  public conditions: string;
  public ville: string;
  constructor(
    degrees: number,
    iconId: number,
    conditions: string,
    ville: string
  ) {
    this.degrees = degrees;
    this.iconId = iconId;
    this.conditions = conditions;
    this.ville = ville;
  }
}
