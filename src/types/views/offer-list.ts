import {IInputItem} from "@/types/global/iForms";

export enum EentryNames {
    entries= 'entries',
    entriesResonse= 'entriesResonse',
}

export interface IOfferListForm {
    headline: string;
    [EentryNames.entries]: Array<IInputItem>[];
    [EentryNames.entriesResonse]: Array<IInputItem>[];
    footer: {
        loadlabel:string;
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
