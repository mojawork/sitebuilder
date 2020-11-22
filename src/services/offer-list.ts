import axios from "axios";
import store from "@/store";

import { IInputItem } from "@/types/global/iForms";
import { EofferListDataNames, IOfferList } from "@/types/components/offer-list";

export class OfferListService {
  // config ---
  private saveService = process.env.VUE_APP_OFFER_LIST_SERVICE;

  private error() {
    store.state.data.main.offerList.error = true;
    store.commit("updateState", store.state);

  }

  public load() {
    axios({
      method: "get",
      url: this.saveService,
      headers: {
        accept: "application/json;charset=UTF-8",
        "content-type": "application/x-www-form-urlencoded"
      }
    }).then(
      result => {
        const data = result.data as IOfferList["data"] | string;
        if (typeof data !== "string") {
          store.commit("UpdateOfferListData", data);
        }
      },
      error => {
        error()
      }
    );
  }

  public save()  {
    return axios({
      method: "post",
      url: this.saveService,
      headers: {
        accept: "application/json;charset=UTF-8",
        "content-type": "application/x-www-form-urlencoded"
      },
      data: store.state.data.main.offerList.data
    }).then(
      result => {
        const data = result.data as IOfferList["response"] | string;
        store.commit("UpdateOfferListResponse", data);
      },
      error => {
        error()
      }
    );
  }
}
