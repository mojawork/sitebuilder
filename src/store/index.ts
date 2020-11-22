import Vue from "vue";
import Vuex from "vuex";
import {IRootState} from "@/types/state/state";
import {staticDataOfferList} from "@/data/components/offer-list";
import {IOfferList} from "@/types/components/offer-list";
import {ITextItem} from "@/types/components/text";
import {IRouteItem} from "@/types/global/routes";
import {staticSiteHome} from "@/data/sites/home";
import {staticSiteTest} from "@/data/sites/test";

Vue.use(Vuex);

export default new Vuex.Store<IRootState>({
    state: {
        data: {
            siteId: 'index',
            header: "header",
            routes: [],
            sites: {
                edit: '',
                data: {
                    home:staticSiteHome,
                    test:staticSiteTest
                },
                error: false
            },
            main: {
                offerList: staticDataOfferList,
                text: {
                    edit: '',
                    data: {},
                    error: false
                }
            },
            footer: "footer",
        }, edit: true
    },
    mutations: {
        // --- updateState ------------------------------------------------------------
        updateState(state: IRootState, payload: IRootState) {
            state = payload;
        },

        // --- updateRoutes -----------------------------------------------------------
        updateRoutes(state: IRootState, payload: IRouteItem[]) {
            state.data.routes = payload;
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
