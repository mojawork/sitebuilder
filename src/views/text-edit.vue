<template>
  <article>
    <MainText />
  </article>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import { setTheme } from "@/views/utils/setTheme";
import MainText from "@/components/main/text/text.vue";

@Component({
  components: {
    MainText
  }
})
export default class ViewTextEdit extends Vue {
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
