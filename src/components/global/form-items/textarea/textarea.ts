import {Component, Prop, Vue} from "vue-property-decorator";
import {FormTextareaValidate} from "@/components/global/form-items/validate/validate";
import {ITextAreaEditorItem} from "@/types/global/iForms";

@Component
export default class GlobalTextarea extends Vue {
    @Prop({required: true})
    public options!: ITextAreaEditorItem;
    private validateTextarea = new FormTextareaValidate();

    private validate() {
        this.options.error.exists = this.validateTextarea.required(this.options.value, this.options.required);
    }
}
