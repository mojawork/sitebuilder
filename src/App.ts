import { Component, Vue } from "vue-property-decorator";
import { EHTMLIds } from "@/types/global/IHtmlIds";
import Header from "@/components/header/header.vue";
import Footer from "@/components/footer/footer.vue";
import store from "@/store";
import {RouteService} from "@/services/routes";

@Component({
  components: {
    Header,
    Footer,
  }
})
export default class App extends Vue {
  public idLayout: EHTMLIds = EHTMLIds.layout;
  public routeService = new RouteService();

  //  --- Lifecycle hooks ---
  private beforeMount() {
    this.routeService.load();
  }

  private mounted () {
    if (this.$route.query.edit === null && !store.state.edit) {
      store.state.edit = true;
      store.commit("updateState", store.state);
    }
  }

}
