<template>
  <article>
    <section>
      <h1>test - Component</h1>

    </section>
    <section>
      <GlobalEditor/>
    </section>

  </article>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import {setTheme} from "@/views/utils/setTheme";
import GlobalEditor from "@/components/global/form-items/editor/editor.vue";


@Component({
  components: {
    GlobalEditor
  }
})
export default class ViewTest extends Vue {
  private theme = new setTheme();

  //  --- Lifecycle hooks ---
  private mounted() {
    this.theme.site();
  }
}
</script>

<style lang="scss" scoped>
@import "~@/scss/import.scss";

article {
  display: flex;
  flex-flow: column;
  section {
    margin-bottom: $margin;
  }
}
</style>
