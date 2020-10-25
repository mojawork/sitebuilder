import {Component, Prop, Vue} from "vue-property-decorator";
import {offerformItem} from "@/data/offer-list"
import GlobalInput from "@/components/global/form-items/input/input.vue";
import {IOfferListForm} from "@/types/views/offer-list";
import _cloneDeep from "lodash/cloneDeep";
import {FormValidate} from "@/components/global/form-items/validate/validate";
import store from '@/store';
import {OfferListService} from "@/services/offer-list";

@Component({
    components: {
        GlobalInput
    }
})
export default class MainOfferListForm extends Vue {
    @Prop({required: true})
    public options!: IOfferListForm;
    public cloneEntry = offerformItem;
    private validate = new FormValidate();
    private saveService = new OfferListService();

    public addEntry(): void {
        this.options.entries.push(_cloneDeep(this.cloneEntry));
        store.commit('updateState', store.state);
    }

    public removeEntry(index: number): void {
        this.options.entries.splice(index, 1);
        store.commit('updateState', store.state);
    }

    public reset(): void {
        console.log('reset');
        this.options.entries = [];
        store.commit('updateState', store.state);
    }

    public load(): void {
        console.log('reset');
        if (this.options.entriesResonse.length > 0) {
            this.options.entries = _cloneDeep(this.options.entriesResonse);
        }
        store.commit('updateState', store.state);
    }

    public save(): void {
        let error = false
        this.options.entries.forEach((entry) => {
            if (!error) {
                error = this.validate.checkErrors(entry)
            } else {
                this.validate.checkErrors(entry)
            }
        })

        if (!error) {
            this.options.entriesResonse = _cloneDeep(this.options.entries);
        }

        store.commit('updateState', store.state);

        this.saveService.save();

        console.log('save', 'error:', error);
        console.log(this.options.entriesResonse)
    }

    //  --- Lifecycle hooks ---
    private mounted() {
        console.log("MainOfferListForm", this.options);
    }
}
