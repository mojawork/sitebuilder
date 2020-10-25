
import axios from 'axios';
import store from '@/store';

import _forEach from 'lodash/forEach';



export class OfferListService {



    public save() {
        console.log('saveService')

        console.log(store.state.data.main.offerList.form.entries)

        axios({
            method: 'post',
            url: 'https://mojawork.de/service/contact.php',
            headers: {
                 'accept': 'application/json;charset=UTF-8',
                 'content-type': 'application/x-www-form-urlencoded'
            },
            data: store.state.data.main.offerList.form
        }).then((result) => {
            console.info('contatDATA:', result.data);
            //console.log(JSON.parse(result.data))


            /*
            _forEach (result.data, (test) => {
                console.log('lodash',test);


            })

             */


            //store.state.data.main.offerList.form.entriesResonse = result.data
        }, (error) => {
            // ToDo: Error Handling
            console.error('ERROR', error);
        });


    }
}