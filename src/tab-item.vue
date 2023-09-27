<template>
  <div @click="changeTab" :class="{ actived: activeName === name, 'tab-item': true }">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "GTabItem",
  inject: ["eventBus"],
  props: {
    name: {
      type: [String, Number],
      default: "",
    },
  },
  data() {
    return {
      activeName: "",
    };
  },
  mounted() {
    this.eventBus.$on("selected", (name) => {
      this.activeName = name;
    });
  },
  methods: {
    changeTab() {
      this.eventBus.$emit("changeTab", this.name);
    },
  },
};
</script>
<style lang="scss" scoped>
.tab-item{
    padding: 0 1em;
    cursor: pointer;
}
</style>
