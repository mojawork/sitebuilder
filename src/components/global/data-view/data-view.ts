import { Component, Prop, Vue } from "vue-property-decorator";

// @ts-ignore
import VueJsonPretty from "vue-json-pretty";
import "vue-json-pretty/lib/styles.css";

@Component({
  components: {
    VueJsonPretty
  }
})
export default class GlobaDataView extends Vue {
  @Prop({ required: true })
  public options!: any;

  //  --- Lifecycle hooks ---
  private mounted() {}
}
