import { Component, Prop, Vue } from "vue-property-decorator";

import {EentryNames, IOfferList} from "@/types/views/offer-list";
import MainOfferListForm from "@/components/main/offer-list/form/form.vue";
import MainOfferListView from "@/components/main/offer-list/view/view.vue";
import GlobalSplitter from "@/components/global/splitter/splitter.vue";

@Component({
  components: {
    MainOfferListForm,
    MainOfferListView,
    GlobalSplitter
  }
})
export default class MainOfferList extends Vue {
  @Prop({ required: true })
  public options!: IOfferList;

  //  --- Lifecycle hooks ---
  private mounted() {
    console.log("MainOfferList", this.options);
  }
}
