<template>
  <div
    class="row"
    :style="{
      marginLeft: `${-gutter / 2}px`,
      marginRight: `${-gutter / 2}px`,
    }"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "GRow",
  props: {
    gutter: {
      type: [String, Number],
      default: 0,
    },
  },
  mounted() {
    this.$children.forEach((i) => {
      i.gutter = this.gutter;
    });
  },
};
</script>
<style lang="scss" scoped>
.row {
  display: flex;
  flex-wrap: wrap;
}
</style>