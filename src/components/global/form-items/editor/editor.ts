import {Component, Prop, Vue} from "vue-property-decorator";
import Quill from 'quill';

import {ITextAreaEditorItem} from "@/types/global/iForms";
import {FormTextareaValidate} from "@/components/global/form-items/validate/validate";

@Component
export default class GlobalEditor extends Vue {

    @Prop({required: true})
    public options!: ITextAreaEditorItem;

    @Prop({required: true})
    public value!: string;

    public editor: Quill | null = null;
    public editValue = this.options.value


    private validateTextarea = new FormTextareaValidate();

    private validate(focus: boolean) {
        let value: string = this.editor?.getText() ? this.editor.root.innerHTML : '';
        this.options.error.exists = this.validateTextarea.required(value, this.options.required);
    }

    private update() {
        let value: string = this.editor?.getText() ? this.editor.root.innerHTML : '';
        this.$emit('input', value);
    }

    //  --- Lifecycle hooks ---
    private mounted() {

        this.editor = new Quill(this.$refs.editor as HTMLInputElement, {
            modules: {
                toolbar: [
                    [{header: [2, 3, false]}],
                    ['bold', 'italic'],
                    [{'list': 'ordered'}, {'list': 'bullet'}],
                    ['link', 'hr'],

                ]
            },
            theme: 'snow',
            formats: ['header', 'bold', 'italic', 'list', 'link', 'hr']
        });


        this.editor.root.innerHTML = this.options.value;

        this.editor.on('text-change', () => {
            this.update()
        });

        const customButton = document.querySelector('.ql-hr');

        customButton?.addEventListener('click', () => {
            console.log('click')
        });

        this.editor.on('selection-change', (range, oldRange) => {
            if (range === null && oldRange !== null) {
                this.validate(false);
            } else if (range !== null && oldRange === null)
                this.validate(true)
        });

    }

    private updated() {
        if (this.editor) {
            this.editor.root.innerHTML = this.options.value;
        }
    }

}
