import { IInputItem } from "@/types/global/iForms";

export interface IOfferListForm {
  headline: string;
  entries: {
    items: Array<IInputItem>;
  }[];
}

export interface IOfferListView {
  headline: string;
}

export interface IOfferList {
  form: IOfferListForm;
  view: IOfferListView;
}
