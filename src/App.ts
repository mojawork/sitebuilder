import { Component, Vue } from "vue-property-decorator";
import { EHTMLIds } from "@/types/global/IHtmlIds";
import Header from "@/components/header/header.vue";
import Footer from "@/components/footer/footer.vue";
import store from "@/store";

@Component({
  components: {
    Header,
    Footer,
  }
})
export default class App extends Vue {
  public idLayout: EHTMLIds = EHTMLIds.layout;

  //  --- Lifecycle hooks ---
  private beforeMount() {
  }

  private mounted () {
    if (this.$route.query.edit === null && !store.state.edit) {
      store.state.edit = true
    }
  }

}
