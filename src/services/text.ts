import axios from "axios";
import store from "@/store";

import { IInputItem } from "@/types/global/iForms";
import { EofferListDataNames, IOfferList } from "@/types/components/offer-list";

export class TextService {
  // config ---
  private loadService = process.env.VUE_APP_TEXT_SERVICE;



  public load() {
    axios({
      method: "get",
      url: this.loadService + '?site=index&file=text&type=html',
      headers: {
        accept: "application/json;charset=UTF-8",
        "content-type": "application/x-www-form-urlencoded"
      }
    }).then(
      result => {
        const data = result.data as | string;
        console.log('TextService', data)
      },
      error => {
        console.log(error)
      }
    );
  }

}
