import { Component, Prop, Vue } from "vue-property-decorator";

import { IOfferListView } from "@/types/views/offer-list";
import GlobaDataView from "@/components/global/data-view/data-view.vue";
import GlobaTab from "@/components/global/tab/tab.vue";

@Component({
  components: {
    GlobaDataView,
    GlobaTab
  }
})
export default class MainOfferListView extends Vue {
  @Prop({ required: true })
  public options!: IOfferListView;

  //  --- Lifecycle hooks ---
  private mounted() {
    console.log("MainOfferListView", this.options);
  }
}
