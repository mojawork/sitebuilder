import {Component, Vue} from "vue-property-decorator";
import {EDirections, EThemes} from "@/types/global/ICssClasses";

@Component({
    components: {}
})
export default class GlobalSplitter extends Vue {
    public CEwide = EDirections;
    public wideCssClass: EDirections = EDirections.center;

    public setTheme () {
        const body: HTMLElement = document.body;
        body.className === EThemes.dark ? body.className = EThemes.light : body.className = EThemes.dark
    }

    //  --- Lifecycle hooks ---
    private mounted() {
        // console.log("GlobaDataView", this.options);
    }
}
