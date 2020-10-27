import axios from 'axios';
import store from '@/store';

import {IInputItem} from "@/types/global/iForms";
import {EentryNames} from "@/types/views/offer-list";


export class OfferListService {

    // config ---
    private saveService = process.env.VUE_APP_OFFER_LIST_SAVE;


    public load(entryName: EentryNames) {
        axios({
            method: 'get',
            url: this.saveService,
            headers: {
                'accept': 'application/json;charset=UTF-8',
                'content-type': 'application/x-www-form-urlencoded'
            }
        }).then((result) => {
            let data = result.data as Array<IInputItem>[] | string;
            if (typeof data === 'string') {data = []}
            store.commit('UpdateOfferListFormEntries', {
                entryName: entryName,
                data: data
            });

        }, (error) => {
            // ToDo: Error Handling
            console.error('ERROR', error);
            store.commit('UpdateOfferListFormEntries', {
                entryName: entryName,
                data: []
            });

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
            data: store.state.data.main.offerList.data[EentryNames.entries]
        }).then((result) => {
            console.info('save contatDATA:', result.data);
            let data = result.data as Array<IInputItem>[];
            store.commit('UpdateOfferListFormEntries', {
                entryName: EentryNames.entriesResonse,
                data: data
            });
        }, (error) => {
            // ToDo: Error Handling
            console.error('ERROR', error);
            store.commit('UpdateOfferListFormEntries', {
                entryName: EentryNames.entriesResonse,
                data: []
            });
        });
    }
}