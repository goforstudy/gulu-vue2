<template>
  <div class="tab-head" ref="tabHead">
    <slot></slot>
    <div class="active-bar" ref="activeBar"></div>
  </div>
</template>
<script>
export default {
  name: "GTabHead",
  inject: ["eventBus"],
  mounted() {
    this.eventBus.$on("selected", (name) => {
      const children = this.$children;
      let activedItem;
      children.forEach((item) => {
        if (item.name === name) {
          activedItem = item.$el;
        }
      });
      const { paddingLeft, width, paddingRight } = getComputedStyle(activedItem)
      const activeBar = this.$refs.activeBar;
      activeBar.style.left = activedItem.offsetLeft + Number(paddingLeft.replace('px', '')) + "px";
      activeBar.style.width = Number(width.replace('px', '')) - Number(paddingLeft.replace('px', '')) - Number(paddingRight.replace('px', '')) + "px";
    });
  },
};
</script>
<style lang="scss" scoped>
.tab-head {
  display: flex;
  line-height: 40px;
  position: relative;
  .active-bar {
    bottom: 0;
    height: 2px;
    border-radius: 4px;
    position: absolute;
    background: var(--g-primary);
    transition: left .5s, width .5s;
  }
}
</style>
