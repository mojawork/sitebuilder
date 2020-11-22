import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import ViewOfferListEdit from "@/views/offer-list-edit.vue";
import ViewTextEdit from "@/views/text-edit.vue";
import ViewDefault from "@/views/default.vue";
import ViewIndex from "@/views/index.vue";
import {IViewNames} from "@/types/global/routes";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/', redirect: { name: IViewNames.index }
  },
  {
    path: "/:id",
    name: IViewNames.index,
    component: ViewIndex, props: true,
  },
  {
    path: "/ViewOfferListEdit",
    name: IViewNames.offerListEdit,
    component: ViewOfferListEdit,
  },
  {
    path: "/ViewTextEdit",
    name: IViewNames.textEdit,
    component: ViewTextEdit,
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
