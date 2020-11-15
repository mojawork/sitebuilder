import {Component, Prop, Vue} from "vue-property-decorator";
import {FormCount} from "@/components/global/form-items/validate/count";
import {FormInputValidate, FormTextareaValidate} from "@/components/global/form-items/validate/validate";
import {EInputTypes, IInputItem, ITextAreaItem} from "@/types/global/iForms";

@Component
export default class GlobalTextarea extends Vue {
    @Prop({required: true})
    public options!: ITextAreaItem;
    private getMaxCount = new FormCount();
    private validateTextarea = new FormTextareaValidate();


    private validate() {

        console.log('validate');


    }
}
