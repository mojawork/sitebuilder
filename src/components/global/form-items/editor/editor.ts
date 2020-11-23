import {Component, Prop, Vue} from "vue-property-decorator";
import Quill from 'quill';
import {update} from "lodash-es";

@Component
export default class GlobalEditor extends Vue {

    //@Prop({required: true})
    //public value!: string;

    public editor: Quill | null = null;
    public value = ''


    private update() {
        this.$emit('input', this.editor?.getText() ? this.editor.root.innerHTML : '');
    }


    private mounted() {

        this.editor = new Quill(this.$refs.editor as HTMLInputElement, {
            modules: {
                toolbar: [
                    [{header: [2, 3, false]}],
                    ['bold', 'italic', 'underline'],
                    [{'list': 'ordered'}, {'list': 'bullet'}],
                    ['link']
                ]
            },
            theme: 'snow',
            formats: ['bold', 'underline', 'header', 'italic', 'list', 'link']
        });

        this.editor.root.innerHTML = this.value;

        // We will add the update event here
        this.editor.on('text-change', () => {
            this.update()
        });

    }

}
