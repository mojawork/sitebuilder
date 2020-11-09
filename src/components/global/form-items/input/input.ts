import {Component, Prop, Vue} from "vue-property-decorator";
import {FormCount} from "@/components/global/form-items/validate/count";
import {FormInputValidate} from "@/components/global/form-items/validate/validate";
import {EInputTypes, IInputItem} from "@/types/global/iForms";

@Component
export default class GlobalInput extends Vue {
    @Prop({required: true})
    public options!: IInputItem;
    private validateInput = new FormInputValidate();
    private getMaxCount = new FormCount();

    public placeholder(): string {
        let output = "";
        if (this.options.placeholder) {
            output = this.options.label;
            if (this.options.required) {
                output = output + "*";
            }
        }
        return output;
    }

    private inputType(): string {
        if (this.options.inputType === EInputTypes.price) {
            return EInputTypes.text;
        }
        return this.options.inputType;
    }

    private validate() {

        if (this.options.inputType === EInputTypes.text) {
            this.options.error.exists = this.validateInput.text(this.options.value);
        }
        if (this.options.inputType === EInputTypes.number) {
            this.options.error.exists = this.validateInput.number(this.options.value);
        }
        if (this.options.inputType === EInputTypes.email) {
            this.options.error.exists = this.validateInput.email(this.options.value);
        }
        if (this.options.inputType === EInputTypes.tel) {
            this.options.error.exists = this.validateInput.tel(this.options.value);
        }
        if (this.options.inputType === EInputTypes.price) {
            let validateOutput = this.validateInput.price(this.options.value)
            this.options.error.exists = validateOutput.error
            this.options.value = validateOutput.value
        }
    }
}
