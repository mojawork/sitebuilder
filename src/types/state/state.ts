import { IOfferList } from "@/types/views/offer-list";

export interface IRootState {
  data: {
    header: string;
    main: {
      offerList: IOfferList;
    };
    footer: string;
  };
}
