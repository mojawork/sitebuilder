import {IInputItem, ITextAreaItem} from "@/types/global/iForms";
import {EComponentTypes} from "@/types/components/global";

export enum ETextTypes {
  string = "string",
  html = "html",
  json = "json",
}

export interface ITextLabels {
  form: {
    label: string;
    inputHeadline: string;
    inputData: string;
    load: string;
    save: string;
    reset: string;
    error: string;
  };
  view: {
    label: string;
    data: string;
    site: string;
    documentation: string;
  }

}

export interface ITextForm {
  label: string;
  inputs:{
    headline: string
    headlineError: string
    data: string;
    dataError: string;
  }
  formActions: {
    loadlabel: string;
    savelabel: string;
    resetlabel: string;
  };
}

export interface ITextView {
  label: string;
  tabs: string[];
}

export interface  ITextComponentData {
  headline: IInputItem;
  content: ITextAreaItem;
}

export interface ITextItem {
  id: string;
  type: ETextTypes;
  componentType: EComponentTypes;
  folder : string;
  file: string;
  componentData: ITextComponentData | null;
  componentResponse: ITextComponentData | null;
  generate: boolean;
}

export interface ITextEdit {
  form: ITextForm;
  view: ITextView;

}


