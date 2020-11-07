import { Component, Prop, Vue } from "vue-property-decorator";
import { IImage } from "@/types/global/IImage";

@Component({
  components: {}
})
export default class GlobalImage extends Vue {
  private assets = process.env.VUE_APP_PUBLIC_ASSETS;

  @Prop({ required: true })
  public options!: IImage;

  //  --- Lifecycle hooks ---
  private beforeMount() {
    this.options.src = this.assets + this.options.src;
  }
}
