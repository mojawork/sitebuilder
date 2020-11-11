import { IOfferList } from "@/types/components/offer-list";

export interface IRootState {
  data: {
    header: string;
    main: {
      offerList: IOfferList;
    };
    footer: string;
  };
}
