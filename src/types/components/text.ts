
export enum ETextTypes {
  string = "string",
  html = "html",
  json = "json",
}

export interface IText {
  id: string;
  type: ETextTypes;
  folder : string;
  file: string;
  headline: string;
  data: string;
  response: string;
  generate: boolean;
}


