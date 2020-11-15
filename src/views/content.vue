<template>
  <article>
    <MainTextSite :options="false"/>
  </article>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import {setTheme} from "@/views/utils/setTheme";
import MainTextSite from "@/components/main/text/site/site.vue";

@Component({
  components: {
    MainTextSite
  }
})
export default class ViewContent extends Vue {
  private theme = new setTheme();

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
