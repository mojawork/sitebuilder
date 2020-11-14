import {Component, Prop, Vue} from "vue-property-decorator";

import {IText} from "@/types/components/text";
import {TextService} from "@/services/text";
import store from "@/store";

@Component({
    components: {}
})
export default class MainTextSite extends Vue {
    @Prop({
        required: true,
    })
    private options!: IText;
    private textService = new TextService();

    //  --- Lifecycle hooks ---

    private mounted() {

        console.log(this.options)

        if (!store.state.data.main.text[this.options.id]) {
            if (this.options.generate) {
                console.log('save')
                this.textService.save(this.options);
            } else {
                console.log('load')
                this.textService.load(this.options);
            }
        }

    }
}
