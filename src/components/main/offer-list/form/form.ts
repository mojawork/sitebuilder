import {Component, Prop, Vue} from "vue-property-decorator";
import {offerFormItems} from "@/data/offer-list"
import GlobalInput from "@/components/global/form-items/input/input.vue";
import {EentryNames, IOfferList, IOfferListForm} from "@/types/views/offer-list";
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


    public entry = offerFormItems;
    private validate = new FormValidate();
    private saveService = new OfferListService();

    public addEntry(): void {
        this.data.entries.push(_cloneDeep(this.entry));
        store.commit('updateState', store.state);
    }

    public removeEntry(index: number): void {
        this.data.entries.splice(index, 1);
        store.commit('updateState', store.state);
    }

    public reset(): void {
        this.data.entries = [];
        store.commit('updateState', store.state);
    }

    public load(): void {
        if (this.data.entriesResonse.length > 0) {
            this.data.entries = _cloneDeep(this.data.entriesResonse);
        }
        else {
            this.saveService.load(EentryNames.entries);
        }
    }

    public save(): void {
        let error = false
        this.data.entries.forEach((entry) => {
            if (!error) {
                error = this.validate.checkErrors(entry)
            } else {
                this.validate.checkErrors(entry)
            }
        })
        if (!error) {
            this.saveService.save();
        }
    }

    //  --- Lifecycle hooks ---
    private mounted() {
        this.saveService.load(EentryNames.entries);
    }
}
