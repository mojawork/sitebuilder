import {Component, Prop, Vue} from "vue-property-decorator";
import {IOfferList} from "@/types/components/offer-list";
import GlobalImage from "@/components/global/image/image.vue";
import {saticOfferHeaderImage} from "@/data/components/offer-list";
import {IViewNames} from "@/types/global/routes";

@Component({
    components: {
        GlobalImage
    }
})
export default class MainOfferListSite extends Vue {
    @Prop({required: true})
    @Prop({required: true})
    public data!: IOfferList["data"];
    public theme = process.env.VUE_APP_DEFAULT_THEME;

    public viewNames = IViewNames;

    public headerImage = saticOfferHeaderImage;

    public showdate(date: string): string {
        var options = {year: 'numeric', month: 'long', day: 'numeric'};
        return new Date(date).toLocaleDateString("de-DE", options);
    }

    //  --- Lifecycle hooks ---
    private mounted() {
    }
}
