import {Component, Prop, Vue} from "vue-property-decorator";
import {ETextColors} from "@/types/global/ICssClasses";

@Component({
    components: {},
})
export default class GlobalPopup extends Vue {
    @Prop({required: false})
    public options!: {
      headline? : string;
      button? :string;
      color: ETextColors;
    };

    public resetDisplay() {
        this.$emit("update:display", false);
    }


    //  --- Lifecycle hooks ---
    private mounted() {

    }
}
