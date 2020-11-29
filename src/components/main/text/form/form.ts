import {Component, Prop, Vue} from "vue-property-decorator";
import GlobalInput from "@/components/global/form-items/input/input.vue";
import GlobalTextarea from "@/components/global/form-items/textarea/textarea.vue";
import {FormValidate} from "@/components/global/form-items/validate/validate";
import {ETextColors} from "@/types/global/ICssClasses";
import {ITextEdit, ITextItem} from "@/types/components/text";
import {TextService} from "@/services/text";
import GlobalEditor from "@/components/global/form-items/editor/editor.vue";

@Component({
    components: {
        GlobalInput,
        GlobalTextarea,
        GlobalEditor,
    }
})
export default class MainTextForm extends Vue {
    @Prop({required: true})
    public options!: ITextEdit["form"];
    @Prop({required: true})
    public data!: ITextItem;

    private service = new TextService();
    public textColors = ETextColors;
    public key = false;

    private validate = new FormValidate();

    public reset(): void {
        this.key = !this.key
        if (this.data.componentData) {
            this.data.componentData.content.value = ''
        }
    }

    public load(): void {
        this.service.load(this.data);
    }

    public save(): void {
        let error = false;

        if (this.data.componentData) {
            error = this.validate.checkErrors([
                this.data.componentData.headline,
                this.data.componentData.content
            ])
        }

        if (!error) {
            this.service.save(this.data);
        }
    }

    //  --- Lifecycle hooks ---
    private mounted() {
    }
}
