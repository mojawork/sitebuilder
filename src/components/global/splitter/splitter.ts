import {Component, Vue, Watch} from "vue-property-decorator";


enum Ewide {
    left = 'left',
    center = 'center',
    right = 'right',
    split = 'split'
}

@Component({
    components: {}
})
export default class GlobalSplitter extends Vue {
    public CEwide = Ewide;
    public wideCssClass: Ewide = Ewide.center;
    //  --- Lifecycle hooks ---
    private mounted() {
        // console.log("GlobaDataView", this.options);
    }
}
