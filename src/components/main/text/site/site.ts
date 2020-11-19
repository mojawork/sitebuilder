import {Component, Prop, Vue} from "vue-property-decorator";

import {ITextItem} from "@/types/components/text";
import {TextService} from "@/services/text";
import store from "@/store";

@Component({
    components: {}
})
export default class MainTextSite extends Vue {
    @Prop({
        required: true,
    })
    private options!: ITextItem | null;
    private textService = new TextService();

    public setEditId() {
        store.commit("UpdateTextEdit", this.options?.id);
        this.$router.push({name: 'ViewTextEdit'})
    }

    //  --- Lifecycle hooks ---
    private mounted() {
        if (this.options) {
            store.commit("UpdateTextData", this.options)
            this.textService.load(this.options);
        }
    }
}
