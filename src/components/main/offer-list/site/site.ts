import {Component, Prop, Vue} from "vue-property-decorator";

import {IOfferList} from "@/types/views/offer-list";
import GlobaDataView from "@/components/global/data-view/data-view.vue";
import GlobaTab from "@/components/global/tab/tab.vue";
import GlobalImage from "@/components/global/image/image.vue";

import {IImage} from "@/types/global/IImage";

@Component({
    components: {
        GlobaDataView,
        GlobaTab,
        GlobalImage
    }
})
export default class MainOfferListSite extends Vue {
    @Prop({required: true})
    public options!: IOfferList["site"];
    @Prop({required: true})
    public data!: IOfferList["data"];

    public testImage: IImage = {
        src: "svg/logo-berger.svg",
        // url: 'https://mojawork.de',
        alt: "logo",
        // caption: 'caption',
        title: "title"
    };

    public showdate(date: string): string {
        var options = {year: 'numeric', month: 'long', day: 'numeric'};
        return new Date(date).toLocaleDateString("de-DE", options);
    }

    //  --- Lifecycle hooks ---
    private mounted() {
    }
}
