import { IOfferList } from "@/types/components/offer-list";
import {IText} from "@/types/components/text";

export interface IRootState {
  data: {
    header: string;
    main: {
      offerList: IOfferList;
      text:{[name:string]:IText};
    };
    footer: string;
  };
}
