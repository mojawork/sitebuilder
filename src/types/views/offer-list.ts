import { IInputItem } from "@/types/global/iForms";

export enum EofferListDataNames {
  header = "header",
  entries = "entries",
  footer = "footer"
}

export interface IOfferListLabels {
  form: {
    label: string;
    headline: string;
    date: string;
    name: string;
    description: string;
    price: string;
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
  };
  site: {
    headline: string;
  };
}

export interface IOfferListForm {
  label: string;
  formActions?: {
    loadlabel: string;
    savelabel: string;
    resetlabel: string;
  };
}

export interface IOfferListView {
  label: string;
  tabs: string[];
}

export interface IOfferListSite {
  headline: string;
}

export interface IOfferList {
  form: IOfferListForm;
  view: IOfferListView;
  site: IOfferListSite;
  data: {
    [EofferListDataNames.header]: Array<IInputItem>[];
    [EofferListDataNames.entries]: Array<IInputItem>[];
    [EofferListDataNames.footer]: Array<IInputItem>[];
    error: boolean;
  };
  response: {
    [EofferListDataNames.header]: Array<IInputItem>[];
    [EofferListDataNames.entries]: Array<IInputItem>[];
    [EofferListDataNames.footer]: Array<IInputItem>[];
    error: boolean;
  };
}
