import {Component, Prop, Vue} from "vue-property-decorator";
import {offerformItem} from "@/data/offer-list"
import GlobalInput from "@/components/global/form-items/input/input.vue";
import {IOfferListForm} from "@/types/views/offer-list";
import _cloneDeep from "lodash/cloneDeep";
import {FormValidate} from "@/components/global/form-items/validate/validate";
import store from '@/store';

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

    public save(): void {
        let error = false
        this.options.entries.forEach((entry) => {
            if (!error) {
                error = this.validate.checkErrors(entry)
            } else {
                this.validate.checkErrors(entry)
            }
        })
        store.commit('updateState', store.state);
        console.log('save', 'error:', error);
    }

    //  --- Lifecycle hooks ---
    private mounted() {
        console.log("MainOfferListForm", this.options);
    }
}
