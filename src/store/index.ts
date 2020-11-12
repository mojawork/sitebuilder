import Vue from "vue";
import Vuex from "vuex";
import {IRootState} from "@/types/state/state";
import {staticDataOfferList} from "@/data/offer-list";
import {IInputItem} from "@/types/global/iForms";
import {EofferListDataNames, IOfferList} from "@/types/components/offer-list";
import {ETextTypes, IText} from "@/types/components/text";

import _mapValues from "lodash/mapValues";

Vue.use(Vuex);

export default new Vuex.Store<IRootState>({
    state: {
        data: {
            header: "header",
            main: {
                offerList: staticDataOfferList,
                text: {}
            },
            footer: "footer"
        }
    },
    mutations: {
        // --- updateState ---
        updateState(state: IRootState, payload: IRootState) {
            state = payload;
        },
        // --- OfferList --------------------------------------------------------------
        UpdateOfferListData(
            state: IRootState,
            payload: IOfferList["data"]
        ) {
            state.data.main.offerList.data = payload;
        },
        UpdateOfferListResponse(
            state: IRootState,
            payload: IOfferList["response"]
        ) {
            state.data.main.offerList.response = payload;
        },
        // --- OfferList --------------------------------------------------------------

        // --- text -------------------------------------------------------------------
        UpdateTextData(
            state: IRootState,
            payload: IText
        ) {
            state.data.main.text[payload.id] = payload;
        }
        // --- text -------------------------------------------------------------------

    },
    actions: {},
    modules: {}
});
