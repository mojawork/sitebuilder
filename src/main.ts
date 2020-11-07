import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/scss/index.scss";

import * as dotenv from "dotenv";

Vue.config.productionTip = false;
dotenv.config();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
