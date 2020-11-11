
export enum ETextTypes {
  string = "string",
  html = "html",
  json = "json",
  md = "md"
}

export interface IText {
  type: ETextTypes;
  headline : string;
  dataUrl : string;
  id: string;
}
