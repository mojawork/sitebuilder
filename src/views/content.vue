<template>
  <article>
    <MainTextSite :options="textLoad"/>
  </article>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import {setTheme} from "@/views/utils/setTheme";
import MainTextSite from "@/components/main/text/site/site.vue";
import {saticTextLoad, saticTextSave} from "@/data/text";

@Component({
  components: {
    MainTextSite
  }
})
export default class ViewContent extends Vue {
  private theme = new setTheme();

  public textLoad = saticTextLoad;
  public textSave = saticTextSave;

  //  --- Lifecycle hooks ---
  private mounted() {
    this.theme.site();
  }
}
</script>

<style lang="scss" scoped>
article {
  display: flex;
  flex-flow: column;
}
</style>
