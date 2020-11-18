import Vue from "vue";
import Vuex from "vuex";
import {IRootState} from "@/types/state/state";
import {staticDataOfferList} from "@/data/components/offer-list";
import {IOfferList} from "@/types/components/offer-list";
import {ITextItem} from "@/types/components/text";

Vue.use(Vuex);

export default new Vuex.Store<IRootState>({
    state: {
        data: {
            header: "header",
            main: {
                offerList: staticDataOfferList,
                text: {
                    edit: '',
                    data: {},
                    error: false
                }
            },
            footer: "footer",
        }, edit: false
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
        UpdateTextEdit(
            state: IRootState,
            payload: string
        ) {
            state.data.main.text.edit = payload;
        },

        UpdateTextData(
            state: IRootState,
            payload: ITextItem
        ) {
            if (state.data.main.text.data) {
                state.data.main.text.data[payload.id] = payload;
            }
        }
        // --- text -------------------------------------------------------------------
    },
    actions: {},
    modules: {}
});
