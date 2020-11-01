import {Component, Vue} from "vue-property-decorator";
import {EHTMLIds} from "@/types/global/IHtmlIds";
import {EThemes} from "@/types/global/ICssClasses";

@Component({
    components: {}
})
export default class App extends Vue {

    public idLayout: EHTMLIds = EHTMLIds.layout;
    public theme: EThemes = EThemes.light;

    //  --- Lifecycle hooks ---
    private beforeMount() {
        document.body.className = this.theme;

    }

}
