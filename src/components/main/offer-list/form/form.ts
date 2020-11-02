import {Component, Prop, Vue} from "vue-property-decorator";
import {offerFormHeader, offerFormItems} from "@/data/offer-list"
import GlobalInput from "@/components/global/form-items/input/input.vue";
import {EofferListDataNames, IOfferList, IOfferListForm} from "@/types/views/offer-list";
import _cloneDeep from "lodash/cloneDeep";
import {FormValidate} from "@/components/global/form-items/validate/validate";
import store from '@/store';
import {OfferListService} from "@/services/offer-list";
import {IInputItem} from "@/types/global/iForms";

@Component({
    components: {
        GlobalInput
    }
})
export default class MainOfferListForm extends Vue {
    @Prop({required: true})
    public options!: IOfferList['form'];
    @Prop({required: true})
    public data!:  IOfferList['data'];
    @Prop({required: true})
    public response!:  IOfferList['response'];

    private header = offerFormHeader;
    public entry = offerFormItems;
    private validate = new FormValidate();
    private service = new OfferListService();

    public addEntry(): void {

         if (this.data.header.length === 0) {
            this.data.header.push(_cloneDeep(this.header));
        }

        this.data.entries.push(_cloneDeep(this.entry));
        store.commit('updateState', store.state);
    }

    public removeEntry(index: number): void {
        this.data.entries.splice(index, 1);
        store.commit('updateState', store.state);
    }

    public reset(): void {
        this.data.header = [];
        this.data.entries = [];
        store.commit('updateState', store.state);
    }

    public load(): void {
        if (this.response.header.length > 0) {
            this.data.header = _cloneDeep(this.response.header);
        }
        if (this.response.entries.length > 0) {
            this.data.entries = _cloneDeep(this.response.entries);
        }
        if (this.response.footer.length > 0) {
            this.data.footer = _cloneDeep(this.response.footer);
        }
        else {
            this.service.load();
        }
    }

    public save(): void {
        let error = false
        /*
        this.data.entries.forEach((entry) => {
            if (!error) {
                error = this.validate.checkErrors(entry)
            } else {
                this.validate.checkErrors(entry)
            }
        })
         */
        if (!error) {
            this.service.save();
        }
    }

    //  --- Lifecycle hooks ---
    private mounted() {
        this.service.load();
    }
}
