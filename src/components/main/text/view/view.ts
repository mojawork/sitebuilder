import { Component, Prop, Vue } from "vue-property-decorator";
import GlobaDataView from "@/components/global/data-view/data-view.vue";
import GlobaTab from "@/components/global/tab/tab.vue";
import MainTextSite from "@/components/main/text/site/site.vue";
import {ITextEdit, ITextItem} from "@/types/components/text";
import GlobalTextarea from "@/components/global/form-items/textarea/textarea.vue";

@Component({
  components: {
    GlobaTab,
    GlobaDataView,
    MainTextSite,
    GlobalTextarea
  }
})
export default class MainTextView extends Vue {
  @Prop({ required: true })
  public options!:  ITextEdit["view"];
  @Prop({ required: true })
  public data!: ITextItem;

  //  --- Lifecycle hooks ---
  private mounted() {
  }
}
