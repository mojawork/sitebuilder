import { Component, Prop, Vue } from "vue-property-decorator";
import _filter from "lodash/filter";

@Component({
  components: {}
})
export default class GlobaTab extends Vue {
  @Prop({
    required: false,
    default: 0,
    type: Number
  })
  public activeTab!: number;
  @Prop({ required: true })
  public options!: {
    tabNames: string[];
  };

  public active(event: MouseEvent, index: number) {
    const tabs = this.$el.getElementsByTagName("header")[0].childNodes;
    _filter(tabs, (tab: HTMLElement) => {
      tab.classList.remove("active");
    });
    const avtivetab = event.target as HTMLElement;
    avtivetab.classList.add("active");
    this.activeContent(index);
  }

  public activeContent(index: number): void {
    const contents = this.$el.getElementsByClassName("content")[0].childNodes;
    _filter(contents, (content: HTMLElement, filterIndex) => {
      content.classList.remove("active");
      if (filterIndex === index) {
        content.classList.add("active");
      }
    });
  }

  //  --- Lifecycle hooks ---
  private mounted() {
    this.activeContent(this.activeTab);
  }
}
