import Vue from "vue";
import Vuex from "vuex";
import {IRootState} from "@/types/state/state";
import {dataOfferList} from "@/data/offer-list";
import {IInputItem} from "@/types/global/iForms";
import {EentryNames} from "@/types/views/offer-list";

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
        UpdateOfferListFormEntries(
            state: IRootState, payload: {
                entryName: EentryNames
                data: Array<IInputItem>[],
            }) {
            state.data.main.offerList.data[payload.entryName] = payload.data
        },
    },
    actions: {},
    modules: {}
});
