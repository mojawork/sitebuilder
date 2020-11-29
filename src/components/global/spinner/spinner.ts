import {Component, Prop, Vue} from "vue-property-decorator";
import store from "@/store";

@Component({
    components: {}
})
export default class GlobalSpinner extends Vue {
    @Prop({required: false})
    public show!: boolean;

    //  --- Lifecycle hooks ---
    private mounted() {
        setTimeout(() => {
            store.commit("updateSpinner", false);
        }, 2000)
    }

}
