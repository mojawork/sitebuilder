import axios from 'axios';
import store from '@/store';

import _forEach from 'lodash/forEach';
import {IInputItem} from "@/types/global/iForms";


export class OfferListService {

    // config ---
    private saveService = process.env.VUE_APP_OFFER_LIST_SAVE;

    public save() {
        axios({
            method: 'post',
            url: this.saveService,
            headers: {
                'accept': 'application/json;charset=UTF-8',
                'content-type': 'application/x-www-form-urlencoded'
            },
            data: store.state.data.main.offerList.form.entries
        }).then((result) => {
            console.info('contatDATA:', result.data);
            store.commit('UpdateOfferListFormEntriesResonse', result.data as Array<IInputItem>[]);
        }, (error) => {
            // ToDo: Error Handling
            console.error('ERROR', error);
        });
    }
}