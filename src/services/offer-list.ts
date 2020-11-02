import axios from 'axios';
import store from '@/store';

import {IInputItem} from "@/types/global/iForms";
import {EofferListDataNames, IOfferList} from "@/types/views/offer-list";


export class OfferListService {

    // config ---
    private saveService = process.env.VUE_APP_OFFER_LIST_SERVICE;


    public load() {
        axios({
            method: 'get',
            url: this.saveService,
            headers: {
                'accept': 'application/json;charset=UTF-8',
                'content-type': 'application/x-www-form-urlencoded'
            }
        }).then((result) => {
            let data = result.data as IOfferList['data'] | string;
            if (typeof data !== 'string') {
                store.commit('UpdateOfferListData', data);
            }

        }, (error) => {
            // ToDo: Error Handling
            console.error('ERROR', error);
        });
    }

    public save() {
        axios({
            method: 'post',
            url: this.saveService,
            headers: {
                'accept': 'application/json;charset=UTF-8',
                'content-type': 'application/x-www-form-urlencoded'
            },
            data: store.state.data.main.offerList.data
        }).then((result) => {
            console.info('save contatDATA:', result.data);
            let data =  result.data as IOfferList['response'] | string;
            store.commit('UpdateOfferListResponse',  data);
        }, (error) => {
            // ToDo: Error Handling
            console.error('ERROR', error);
        });
    }
}