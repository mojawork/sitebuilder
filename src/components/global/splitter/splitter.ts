import {Component, Vue} from "vue-property-decorator";
import {EDirections, ELayoutMod, EThemes} from "@/types/global/ICssClasses";
import {globalChangeCssClass} from "@/components/utils/changeCssClass";
import {EHTMLIds} from "@/types/global/IHtmlIds";

@Component({
    components: {}
})
export default class GlobalSplitter extends Vue {
    public CEwide = EDirections;
    public wideCssClass: EDirections = EDirections.center;

    public zoom(): void {
        const layout = document.getElementById(EHTMLIds.layout);
        if (layout) {
            layout.className === ELayoutMod.mZoom ? layout.className = ELayoutMod.mEmpty : layout.className = ELayoutMod.mZoom
        }
    }

    public setTheme() {
        const body: HTMLElement = document.body;
        body.className === EThemes.dark ? body.className = EThemes.light : body.className = EThemes.dark
    }

    public print() {
        window.print();
    }

    //  --- Lifecycle hooks ---
    private mounted() {
        this.zoom();
    }
}
