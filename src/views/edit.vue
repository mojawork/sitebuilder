<template>
  <article>
    <MainOfferList :options="dataOfferList" />
  </article>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { dataOfferList } from "@/data/offer-list";
import MainOfferList from "@/components/main/offer-list/offer-list.vue";

@Component({
  components: {
    MainOfferList
  }
})
export default class Edit extends Vue {
  // public data = inputText;
  // public data2 = _clone(inputText);
  public dataOfferList = dataOfferList;
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
