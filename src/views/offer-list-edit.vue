<template>
  <article>
    <MainOfferList :options="dataOfferList" />
  </article>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { staticDataOfferList } from "@/data/offer-list";
import MainOfferList from "@/components/main/offer-list/offer-list.vue";
import { setTheme } from "@/views/utils/setTheme";

@Component({
  components: {
    MainOfferList
  }
})
export default class ViewOfferListEdit extends Vue {
  public dataOfferList = staticDataOfferList;
  private theme = new setTheme();

  //  --- Lifecycle hooks ---
  private mounted() {
    this.theme.edit();
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
