import { Component, Prop, Vue } from "vue-property-decorator";

import GlobalInput from "@/components/global/form-items/input/input.vue";
import { IOfferListForm } from "@/types/views/offer-list";
import _cloneDeep from "lodash/cloneDeep";

@Component({
  components: {
    GlobalInput
  }
})
export default class MainOfferListForm extends Vue {
  @Prop({ required: true })
  public options!: IOfferListForm;

  public addEntry(): void {
    this.options.entries.push(_cloneDeep(this.options.entries[0]));
  }

  //  --- Lifecycle hooks ---
  private mounted() {
    console.log("MainOfferListForm", this.options);
  }
}
