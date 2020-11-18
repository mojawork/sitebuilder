import {IOfferList} from "@/types/components/offer-list";
import {ITextItem} from "@/types/components/text";

export interface IRootState {
    data: {
        header: string;
        main: {
            offerList: IOfferList;
            text: {
                edit: string;
                data: { [name: string]: ITextItem } | null
                error: boolean
            };
        };
        footer: string;
    };
    edit: boolean;
}
