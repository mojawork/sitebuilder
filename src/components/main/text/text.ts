import { Component, Vue } from "vue-property-decorator";
import GlobalSplitter from "@/components/global/splitter/splitter.vue";
import {ITextItem} from "@/types/components/text";
import MainTextView from "@/components/main/text/view/view.vue";
import MainTextForm from "@/components/main/text/form/form.vue";
import store from "@/store";
import {staticTextEdit} from "@/data/components/text";
import _get from "lodash/get"

@Component({
  components: {
    GlobalSplitter,
    MainTextView,
    MainTextForm
  }
})
export default class MainText extends Vue {
  public options = staticTextEdit;
  public data : ITextItem | boolean | undefined = false;
  //  --- Lifecycle hooks ---
  private mounted() {
    this.data = _get(store.state.data.main.text.data, store.state.data.main.text.edit)
  }
}
