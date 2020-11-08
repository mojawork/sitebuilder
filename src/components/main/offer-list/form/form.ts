import {Component, Prop, Vue} from "vue-property-decorator";
import {saticOfferFormHeader, staticOfferListHeadlineItems, staticOfferListOfferItems} from "@/data/offer-list";
import GlobalInput from "@/components/global/form-items/input/input.vue";
import GlobalPopup from "@/components/global/popup/popup.vue";
import {EofferListDataNames, IOfferList,} from "@/types/views/offer-list";
import _cloneDeep from "lodash/cloneDeep";
import {FormValidate} from "@/components/global/form-items/validate/validate";
import store from "@/store";
import {OfferListService} from "@/services/offer-list";
import {ETextColors} from "@/types/global/ICssClasses";


@Component({
    components: {
        GlobalInput,
        GlobalPopup
    }
})
export default class MainOfferListForm extends Vue {
    @Prop({required: true})
    public options!: IOfferList["form"];
    @Prop({required: true})
    public data!: IOfferList["data"];
    @Prop({required: true})
    public response!: IOfferList["response"];

    private header = saticOfferFormHeader;

    public staticOfferHeadlineItems = staticOfferListHeadlineItems;
    public staticOfferItems = staticOfferListOfferItems;
    public textColors = ETextColors;
    private validate = new FormValidate();
    private service = new OfferListService();

    public addItem(index: number): void {
        if (this.data.header.length === 0) {
            this.data.header.push(_cloneDeep(this.header));
        }
        this.data[EofferListDataNames.items].splice(index + 1, 0, _cloneDeep(this.staticOfferItems));
        store.commit("updateState", store.state);
    }

    public addHeadlineItem(index: number): void {
        if (this.data.header.length === 0) {
            this.data.header.push(_cloneDeep(this.header));
        }
        this.data[EofferListDataNames.items].splice(index + 1, 0, _cloneDeep(this.staticOfferHeadlineItems));
        this.data[EofferListDataNames.items].splice(index + 2, 0, _cloneDeep(this.staticOfferItems));
        store.commit("updateState", store.state);
    }


    public removeItem(index: number): void {
        this.data[EofferListDataNames.items].splice(index, 1);
        store.commit("updateState", store.state);
    }

    public reset(): void {
        this.data.header = [];
        this.data[EofferListDataNames.items] = [];
        store.commit("updateState", store.state);
    }

    public load(): void {
        if (this.response.header.length > 0) {
            this.data.header = _cloneDeep(this.response.header);
        }
        if (this.response[EofferListDataNames.items].length > 0) {
            this.data[EofferListDataNames.items] = _cloneDeep(this.response[EofferListDataNames.items]);
        }
        if (this.response.footer.length > 0) {
            this.data.footer = _cloneDeep(this.response.footer);
        } else {
            this.service.load();
        }
    }

    public save(): void {
        let error = true;

        this.data.items.forEach((item) => {
            if ("offer" in item) {
                error = this.validate.checkErrors(item.offer)
            }
            if ("headline" in item) {
                error = this.validate.checkErrors(item.headline)
            }
        })
        if (!error) {
            this.service.save();
        }
    }

    public error(): boolean {
        return this.response.error || this.data.error;
    }

    //  --- Lifecycle hooks ---
    private mounted() {
        this.service.load();
    }
}
