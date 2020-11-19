import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import ViewHome from "@/views/home.vue";
import ViewOfferListEdit from "@/views/offer-list-edit.vue";
import ViewTextEdit from "@/views/text-edit.vue";
import ViewDefault from "@/views/default.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/:id",
    name: "Home",
    component: ViewHome, props: true,
  },
  {
    path: "/Default/",
    name: "Default",
    component: ViewDefault , props: true,
  },
  {
    path: "/ViewOfferListEdit",
    name: "ViewOfferListEdit",
    component: ViewOfferListEdit,
  },
  {
    path: "/ViewTextEdit",
    name: "ViewTextEdit",
    component: ViewTextEdit,
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
