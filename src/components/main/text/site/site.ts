import {Component, Prop, Vue} from "vue-property-decorator";
import {ITextItem} from "@/types/components/text";
import {TextService} from "@/services/text";
import store from "@/store";
import {IViewNames} from "@/types/global/routes";

@Component({
    components: {}
})
export default class MainTextSite extends Vue {
    @Prop({
        required: true,
    })
    private options!: ITextItem | null;
    private textService = new TextService();
    private viewNames = IViewNames;
    public theme = process.env.VUE_APP_DEFAULT_THEME;

    public setEditId() {
        store.commit("UpdateTextEdit", this.options?.id);
        this.$router.push({name: this.viewNames.textEdit})
    }

    //  --- Lifecycle hooks ---
    private mounted() {
        if (this.options) {
            store.commit("UpdateTextData", this.options)
            this.textService.load(this.options);
        }
    }
}
