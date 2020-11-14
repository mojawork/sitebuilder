import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import ViewHome from "@/views/home.vue";
import OfferListEdit from "@/views/offer-list-edit.vue";
import ViewContent from "@/views/content.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: ViewHome, props: true,
    // alias: ['/wurst']
  },
  {
    path: "/Content/",
    name: "Content",
    component: ViewContent, props: true,
  },
  {
    path: "/ViewOfferListEdit",
    name: "ViewOfferListEdit",
    component: OfferListEdit,
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
