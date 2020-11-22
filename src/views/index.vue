<template>
  <article>
    <section class="site">route is: {{ $route.params.id }}</section>

    <template v-if="siteData">
      <template v-for="component in siteData.components">
        <MainTextSite
          v-if="component.componentType === componentTypes.text"
          :key="component.id"
          :options="component"
        />

        <MainOfferListSite
            v-if="component.componentType === componentTypes.offerList"
            :options="$store.state.data.main.offerList.site"
            :data="$store.state.data.main.offerList.data"
        />

      </template>
    </template>


  </article>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import MainOfferListSite from "@/components/main/offer-list/site/site.vue";
import { OfferListService } from "@/services/offer-list";
import { setTheme } from "@/views/utils/setTheme";
import MainTextSite from "@/components/main/text/site/site.vue";
import { EComponentTypes } from "@/types/components/global";
import _get from "lodash/get";
import {ISites} from "@/types/sites";

@Component({
  components: {
    MainOfferListSite,
    MainTextSite
  }
})
export default class ViewIndex extends Vue {
  private offerListService = new OfferListService();
  private theme = new setTheme();

  public componentTypes = EComponentTypes;
  public siteData: ISites | undefined = undefined;

  @Watch("$route", { immediate: true, deep: true })
  public watchRoute() {
    console.log(this.$route.params.id, this.$store.state.data.sites.data);
    console.log(_get(this.$store.state.data.sites.data, this.$route.params.id));

    this.siteData = _get(
      this.$store.state.data.sites.data,
      this.$route.params.id
    );
  }

  //  --- Lifecycle hooks ---
  private beforeMount() {}

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
