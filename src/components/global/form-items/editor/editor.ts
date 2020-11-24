import {Component, Prop, Vue} from "vue-property-decorator";
import Quill from 'quill';
import _cloneDeep from "lodash/cloneDeep";
import {ITextAreaItem} from "@/types/global/iForms";

@Component
export default class GlobalEditor extends Vue {

    @Prop({required: true})
    public options!: ITextAreaItem;

    @Prop({required: true})
    public value!: string;

    public editor: Quill | null = null;
    public editValue = this.options.value

    private update() {
        this.$emit('input', this.editor?.getText() ? this.editor.root.innerHTML : '');
    }

    private mounted() {

        this.editor = new Quill(this.$refs.editor as HTMLInputElement, {
            modules: {
                toolbar: [
                    [{header: [2, 3, false]}],
                    ['bold', 'italic'],
                    [{'list': 'ordered'}, {'list': 'bullet'}],
                    ['link']
                ]
            },
            theme: 'snow',
            formats: ['bold', 'italic', 'list', 'link']
        });
        this.editor.focus(
        )

        this.editor.root.innerHTML = this.editValue;

        // We will add the update event here
        this.editor.on('text-change', () => {
            this.update()
        });

    }

}
