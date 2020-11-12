import {Component, Prop, Vue} from "vue-property-decorator";

import {IText} from "@/types/components/text";
import {TextService} from "@/services/text";
import store from "@/store";

@Component({
    components: {
    }
})
export default class MainTextSite extends Vue {
    @Prop({required: true})
    private options!: IText;
    private textService = new TextService();

    //  --- Lifecycle hooks ---
    private mounted() {
        if (!store.state.data.main.text[this.options.id]){
            this.textService.load(this.options);
        }

    }
}
