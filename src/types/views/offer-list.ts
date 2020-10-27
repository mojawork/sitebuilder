import {IInputItem} from "@/types/global/iForms";

export enum EentryNames {
    entries = 'entries',
    entriesResonse = 'entriesResonse',
}

export interface IOfferListLabels {
    form: {
        headline:string;
        name: string;
        description: string;
        price: string;
        load: string;
        save: string;
        reset: string;
        error:string;
    },
    view: {
        headline: string;
        data: string;
        site: string;
        documentation: string;
    },
    site: {
        headline: string;
    };

}

export interface IOfferListData {
    headline: string;
    [EentryNames.entries]: Array<IInputItem>[];
    [EentryNames.entriesResonse]: Array<IInputItem>[];
    formActions?: {
        loadlabel: string;
        savelabel: string;
        resetlabel: string;
    }
}

export interface IOfferListView {
    headline: string;
    tabs: string[];
}

export interface IOfferList {
    form: IOfferListData;
    view: IOfferListView;
    site: IOfferListData;
}
