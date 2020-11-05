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
import { dataOfferList } from "@/data/offer-list";
import MainOfferListSite from "@/components/main/offer-list/site/site.vue";
import { OfferListService } from "@/services/offer-list";
import {EHTMLIds} from "@/types/global/IHtmlIds";
import {ELayoutMod} from "@/types/global/ICssClasses";

@Component({
  components: {
    MainOfferListSite
  }
})
export default class Home extends Vue {
  public dataOfferList = dataOfferList;
  private service = new OfferListService();

  //  --- Lifecycle hooks ---
  private mounted() {
    this.service.load();
    const layout = document.getElementById(EHTMLIds.layout);
    if (layout) {
      layout.className = ELayoutMod.mEmpty;
    }
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
