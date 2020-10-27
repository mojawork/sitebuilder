import { Component, Prop, Vue } from "vue-property-decorator";

import {IOfferList} from "@/types/views/offer-list";
import GlobaDataView from "@/components/global/data-view/data-view.vue";
import GlobaTab from "@/components/global/tab/tab.vue";

@Component({
  components: {
    GlobaDataView,
    GlobaTab
  }
})
export default class MainOfferListSite extends Vue {
  @Prop({ required: true })
  public options!: IOfferList['site'];
  @Prop({ required: true })
  public data!: IOfferList['data'];

  //  --- Lifecycle hooks ---
  private mounted() {
    console.log("MainOfferListView", this.options);
  }
}
