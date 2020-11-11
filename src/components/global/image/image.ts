import { Component, Prop, Vue } from "vue-property-decorator";
import { IImage } from "@/types/global/IImage";

@Component({
  components: {}
})
export default class GlobalImage extends Vue {
  public assets = process.env.VUE_APP_PUBLIC_ASSETS;
  public imageSRC = '';

  @Prop({ required: true })
  public options!: IImage;

  //  --- Lifecycle hooks ---
  private beforeMount() {

    console.log(this.assets);

    this.imageSRC= this.assets + this.options.src

    console.log(this.imageSRC)

  }
}
