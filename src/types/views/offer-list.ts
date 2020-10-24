import {IInputItem} from "@/types/global/iForms";

export interface IOfferListForm {
    headline: string;
    entries: Array<IInputItem>[];
    footer: {
        savelabel: string;
        resetlabel: string;
    }
}

export interface IOfferListView {
    headline: string;
}

export interface IOfferList {
    form: IOfferListForm;
    view: IOfferListView;
}
