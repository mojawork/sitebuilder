import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import ViewHome from "@/views/home.vue";
import ViewOfferListEdit from "@/views/offer-list-edit.vue";

import ViewTextEdit from "@/views/text-edit.vue";
import ViewDefault from "@/views/default.vue";
import {setAlias} from "@/router/alias";
import {IComponentTypes} from "@/types/global/routes";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: ViewHome, props: true,
    alias: setAlias(IComponentTypes.Home),
  },
  {
    path: "/Default/",
    name: "Default",
    component: ViewDefault , props: true,
    alias: setAlias(IComponentTypes.Default),
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
