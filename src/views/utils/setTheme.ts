import {EHTMLIds} from "@/types/global/IHtmlIds";
import {ELayoutMod, EThemes} from "@/types/global/ICssClasses";

export class setTheme {
    private theme = process.env.VUE_APP_DEFAULT_THEME;
    private body: HTMLElement = document.body
    private layout = document.getElementById(EHTMLIds.layout);

    public site() {
        if (this.theme) {
            this.body.className = this.theme;
        }
        if (this.layout) {
            this.layout.className = ELayoutMod.mEmpty;
        }
    }

    public edit() {
        this.body.className = EThemes.light;
        if (this.layout) {
            this.layout.className = ELayoutMod.mZoom;
        }
    }
}
