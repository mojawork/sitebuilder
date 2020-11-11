import {Component, Prop, Vue} from "vue-property-decorator";


import {IText} from "@/types/components/text";
import {TextService} from "@/services/text";

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

        this.textService.load();
    }
}
