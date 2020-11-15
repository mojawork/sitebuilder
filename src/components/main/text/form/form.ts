import {Component, Prop, Vue} from "vue-property-decorator";
import GlobalInput from "@/components/global/form-items/input/input.vue";
import GlobalPopup from "@/components/global/popup/popup.vue";
import {FormValidate} from "@/components/global/form-items/validate/validate";
import {ETextColors} from "@/types/global/ICssClasses";
import {ITextEdit, ITextItem} from "@/types/components/text";
import {TextService} from "@/services/text";

@Component({
    components: {
        GlobalInput,
        GlobalPopup
    }
})
export default class MainTextForm extends Vue {
    @Prop({required: true})
    public options!: ITextEdit["form"];
    @Prop({required: true})
    public data!: ITextItem;

    private service = new TextService();

    public textColors = ETextColors;
    private validate = new FormValidate();


    public reset(): void {
        console.log('reset')
    }

    public load(): void {
        console.log('load')
        this.service.load(this.data);
    }

    public save(): void {
        let error = false;

        /*
        this.data.items.forEach((item) => {
            if ("offer" in item) {
                error = this.validate.checkErrors(item.offer)
            }
            if ("headline" in item) {
                error = this.validate.checkErrors(item.headline)
            }
        })
         */

        if (!error) {
            this.service.save(this.data);
        }
    }

    public error(): boolean {

        return false;
        // return this.response.error || this.data.error;
    }

    //  --- Lifecycle hooks ---
    private mounted() {
    }
}
