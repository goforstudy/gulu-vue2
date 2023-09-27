<template>
  <div v-show="activeName === name" :class="{ actived: activeName === name }"><slot></slot></div>
</template>
<script>
export default {
  name: "GTabPane",
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
        this.activeName = name
    });
  },
};
</script>
<style lang="scss" scoped>
</style>
