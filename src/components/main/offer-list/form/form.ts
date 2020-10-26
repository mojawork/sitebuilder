import {Component, Prop, Vue} from "vue-property-decorator";
import {offerformItem} from "@/data/offer-list"
import GlobalInput from "@/components/global/form-items/input/input.vue";
import {EentryNames, IOfferListForm} from "@/types/views/offer-list";
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
        if (this.options.entriesResonse.length > 0) {
            this.options.entries = _cloneDeep(this.options.entriesResonse);
        }
        else {
            this.saveService.load(EentryNames.entries);
        }
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
            this.saveService.save();
        }
    }

    //  --- Lifecycle hooks ---
    private mounted() {
        this.saveService.load(EentryNames.entries);
        console.log("MainOfferListForm", this.options);
    }
}
