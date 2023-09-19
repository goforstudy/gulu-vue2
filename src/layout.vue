<template>
  <div class="layout" :class="selfClass">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "GLayout",
  data() {
    return {
      selfClass: {
        'has-sider': false
      }
    }
  },
  mounted() {
    this.$children.some(
      vm => {
        if(vm.$options.name === 'GSider') {
          this.selfClass['has-sider'] = true
          return true
        }
      }
    )
  },
};
</script>
<style lang="scss" scoped>
.layout{
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  &.has-sider{
    flex-direction: row;
  }
}
</style>