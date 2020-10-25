import Vue from "vue";
import Vuex from "vuex";
import { IRootState } from "@/types/state/state";
import { dataOfferList } from "@/data/offer-list";
import {IInputItem} from "@/types/global/iForms";

Vue.use(Vuex);

export default new Vuex.Store<IRootState>({
  state: {
    data: {
      header: "header",
      main: {
        offerList: dataOfferList
      },
      footer: "footer"
    }
  },
  mutations: {
    // --- updateState ---
    updateState(state: IRootState, payload: IRootState) {
      state = payload;
    },
    // --- UpdateOfferListFormEntriesResonse ---
    UpdateOfferListFormEntriesResonse(state: IRootState, payload: Array<IInputItem>[]) {
      state.data.main.offerList.form.entriesResonse = payload
    },

  },
  actions: {},
  modules: {}
});
