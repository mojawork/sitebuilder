import axios from "axios";
import store from "@/store";

import {ITextItem} from "@/types/components/text";
import {IOfferList} from "../types/components/offer-list";
import {staticHeaderRoutes} from "../data/routes/routes";
import {IRouteItem} from "@/types/global/routes";

export class RouteService {
    // config ---
    private service = process.env.VUE_APP_NAVIGATION_SERVICE;

    private testdata = staticHeaderRoutes

    public load() {

        store.commit("updateRoutes", this.testdata);

        /*
        axios({
            method: "post",
            url: this.service,
            headers: {
                accept: "application/json;charset=UTF-8",
                "content-type": "application/x-www-form-urlencoded"
            }
        }).then(
            result => {
                const data = result.data as IRouteItem[];
                store.commit("updateRoutes", data);
            },
            error => {
               console.log('error')
            }
        );

         */
    }


    public save()  {
        return axios({
            method: "post",
            url: this.service,
            headers: {
                accept: "application/json;charset=UTF-8",
                "content-type": "application/x-www-form-urlencoded"
            },
            data: this.testdata
        }).then(
            result => {
                console.log(result.data)
                const data = result.data as IRouteItem[];
                store.commit("updateRoutes", data);
            },
            error => {

                console.log(error)

            }
        );
    }

}
