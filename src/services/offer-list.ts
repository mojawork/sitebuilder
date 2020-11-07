import axios from "axios";
import store from "@/store";

import { IInputItem } from "@/types/global/iForms";
import { EofferListDataNames, IOfferList } from "@/types/views/offer-list";

export class OfferListService {
  // config ---
  private saveService = process.env.VUE_APP_OFFER_LIST_SERVICE;

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
        store.state.data.main.offerList.data.error = true;
        store.commit("updateState", store.state);
        console.error("ERROR", error);
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
        console.info("save contatDATA:", result.data);
        const data = result.data as IOfferList["response"] | string;
        store.commit("UpdateOfferListResponse", data);
      },
      error => {
        store.state.data.main.offerList.response.error = true;
        store.commit("UpdateOfferListResponse", store.state.data.main.offerList.response);
        return true;
      }
    );
  }
}
