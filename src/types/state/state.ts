import {IOfferList} from "@/types/components/offer-list";
import {ITextItem} from "@/types/components/text";
import {IRouteItem} from "@/types/global/routes";

export interface IRootState {
    data: {
        header: string;
        routes: IRouteItem[];
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
