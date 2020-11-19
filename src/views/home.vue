<template>
  <article>
    <section class="site">route is: {{ $route.params.id }}</section>

    <template v-for="component in viewPageHome.components">
      <MainTextSite
        v-if="component.componentType === componentTypes.text"
        :options="component"
      />
    </template>
    <MainOfferListSite
      :options="$store.state.data.main.offerList.site"
      :data="$store.state.data.main.offerList.data"
    />
  </article>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MainOfferListSite from "@/components/main/offer-list/site/site.vue";
import { OfferListService } from "@/services/offer-list";
import { setTheme } from "@/views/utils/setTheme";
import MainTextSite from "@/components/main/text/site/site.vue";
import { staticViewPageHome } from "@/data/view/home";
import { IViewPageHome } from "@/types/views/home";
import { EComponentTypes } from "@/types/components/global";

@Component({
  components: {
    MainOfferListSite,
    MainTextSite
  }
})
export default class ViewHome extends Vue {
  private offerListService = new OfferListService();
  private theme = new setTheme();

  public viewPageHome: IViewPageHome = staticViewPageHome;
  public componentTypes = EComponentTypes;

  //  --- Lifecycle hooks ---
  private mounted() {
    this.offerListService.load();
    this.theme.site();
  }
}
</script>

<style lang="scss" scoped>
@import "~@/scss/import.scss";
article {
  display: flex;
  flex-flow: column;
  .site {
    position: relative;
    display: flex;
    flex-flow: column;
    padding: $padding;
    margin-bottom: $margin;
    background-color: var(--c-background);
  }
}
</style>
