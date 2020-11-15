import {IInputItem} from "@/types/global/iForms";

export enum EofferListDataNames {
    header = "header",
    items = "items",
    footer = "footer"
}

export interface IOfferListLabels {
    form: {
        label: string;
        headline: string;
        date: string;
        offerHeadline: string;
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
    }
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


export interface IOfferListHeadlineItems {
    headline: Array<IInputItem>;
}

export interface IOfferListOfferItems {
    offer: Array<IInputItem>;
}


export interface IOfferList {
    form: IOfferListForm;
    view: IOfferListView;
    data: {
        [EofferListDataNames.header]: Array<IInputItem>[];
        [EofferListDataNames.items]: Array<IOfferListHeadlineItems | IOfferListOfferItems>
        [EofferListDataNames.footer]: Array<IInputItem>[];
        error: boolean;
    };
    response: {
        [EofferListDataNames.header]: Array<IInputItem>[];
        [EofferListDataNames.items]: Array<IOfferListHeadlineItems | IOfferListOfferItems>;
        [EofferListDataNames.footer]: Array<IInputItem>[];
        error: boolean;
    };
}
