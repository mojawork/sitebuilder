import { Component, Vue } from "vue-property-decorator";
import {staticHeaderRoutes} from "@/data/routes/routes";

@Component({
  components: {
  }
})
export default class Header extends Vue {

  public routes = staticHeaderRoutes

  //  --- Lifecycle hooks ---
  private mounted() {}
}