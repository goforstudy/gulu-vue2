<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
import Vue from "vue";

const eventBus = new Vue();
export default {
  name: "GTab",
  props: {
    value: {
      type: String | Number,
      default: "",
    },
  },
  model: {
    props: "value",
    event: "change",
  },
  data() {
    return {
      //   eventBus: eventBus,
    };
  },
  provide: {
    eventBus: eventBus,
  },
  mounted() {
    eventBus.$emit("selected", this.value);
    eventBus.$on("changeTab", (name) => {
      this.$emit("change", name);
      eventBus.$emit("selected", name);
    });
  },
};
</script>
<style lang="scss" scoped>
</style>
