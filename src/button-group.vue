<template>
  <div class="button-group">
    <slot />
  </div>
</template>
<script>
export default {
  name: 'GButtonGroup',
  mounted() {
    for (let node of this.$el.children) {
      if (node.nodeName && node.nodeName.toLowerCase() !== "button") {
        console.warn(
          `g-button-group's children should be button component, it's a ${node.nodeName} component`
        );
      }
    }
  },
};
</script>
<style lang="scss" scoped>
.button-group {
  display: inline-flex;
  justify-content: center;
  .g-button {
    border-radius: 0;
    &:not(:first-child) {
      margin-left: -1px;
    }
    &:first-child {
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }
    &:last-child {
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }
    &:hover {
      z-index: 1;
      position: relative;
    }
  }
}
</style>