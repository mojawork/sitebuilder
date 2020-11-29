import {IOfferList} from "@/types/components/offer-list";
import {ITextItem} from "@/types/components/text";
import {IRouteItem} from "@/types/global/routes";
import {ISites} from "@/types/sites";

export interface IRootState {
    data: {
        siteId: string;
        header: string;
        routes: IRouteItem[];
        sites:{
            edit: string;
            data: { [name: string]: ISites } | null
            error: boolean
        };
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
    spinner : boolean;
    edit: boolean;
}
