<template>
  <article>
    <h1>DEFAULT - Component</h1>
  </article>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import {setTheme} from "@/views/utils/setTheme";

@Component({
  components: {}
})
export default class ViewDefault extends Vue {
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
