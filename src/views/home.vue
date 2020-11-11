<template>
  <article>
    <section>
      <MainTextSite :options="test" />
    </section>

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
import { saticTextText } from "@/data/text";

@Component({
  components: {
    MainOfferListSite,
    MainTextSite
  }
})
export default class Home extends Vue {
  private offerListService = new OfferListService();

  private theme = new setTheme();

  public test = saticTextText;

  //  --- Lifecycle hooks ---
  private mounted() {
    this.offerListService.load();

    this.theme.site();
  }
}
</script>

<style lang="scss" scoped>
article {
  display: flex;
  flex-flow: column;

  > * {
    // background-color: #cccccc;
    padding: 10px;
    margin-bottom: 10px;
  }
}
</style>
