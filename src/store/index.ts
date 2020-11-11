import Vue from "vue";
import Vuex from "vuex";
import { IRootState } from "@/types/state/state";
import { staticDataOfferList } from "@/data/offer-list";
import { IInputItem } from "@/types/global/iForms";
import { EofferListDataNames, IOfferList } from "@/types/components/offer-list";

Vue.use(Vuex);

export default new Vuex.Store<IRootState>({
  state: {
    data: {
      header: "header",
      main: {
        offerList: staticDataOfferList
      },
      footer: "footer"
    }
  },
  mutations: {
    // --- updateState ---
    updateState(state: IRootState, payload: IRootState) {
      state = payload;
    },
    // --- UpdateOfferList ---
    UpdateOfferListData(state: IRootState, payload: IOfferList["data"]) {
      state.data.main.offerList.data = payload;
    },
    // --- UpdateOfferListResponse ---
    UpdateOfferListResponse(
      state: IRootState,
      payload: IOfferList["response"]
    ) {
      state.data.main.offerList.response = payload;
    }


  },
  actions: {},
  modules: {}
});
