
export enum ETextTypes {
  string = "string",
  html = "html",
  json = "json",
  md = "md"
}

export interface IText {
  id: string;
  type: ETextTypes;
  headline : string;
  folder : string;
  file: string;
  response: string;
}


