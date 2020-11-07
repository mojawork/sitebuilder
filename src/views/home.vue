<template>
  <article>
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

@Component({
  components: {
    MainOfferListSite
  }
})
export default class Home extends Vue {
  private service = new OfferListService();
  private theme = new setTheme();

  //  --- Lifecycle hooks ---
  private mounted() {
    this.service.load();
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
