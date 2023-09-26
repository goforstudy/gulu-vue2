<template>
  <div class="toast" :class="`position-${position}`">
    <slot></slot>
    <span v-if="showClose" @click="closeButtonFn" class="close-icon">
      <g-icon name="close"></g-icon>
    </span>
  </div>
</template>
<script>
export default {
  name: "GToast",
  props: {
    autoClose: {
      type: Boolean,
      default: true,
    },
    autoCloseDelay: {
      type: Number,
      default: 3,
    },
    callback: {
      type: Function,
      default: () => {
        console.log("default");
      },
    },
    showClose: {
      type: Boolean,
      default: false,
    },
    position: {
      type: String,
      default: "top",
    },
  },
  mounted() {
    if (this.autoClose) {
      setTimeout(() => {
        this.close();
      }, this.autoCloseDelay * 1000);
    }
  },
  methods: {
    close() {
      this.$el.remove();
      this.$destroy();
    },
    closeButtonFn() {
      this.close();
      this.callback();
    },
  },
};
</script>
<style lang="scss" scoped>
$toast-height: 40px;
.toast {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 50%;
  min-height: $toast-height;
  line-height: 1.5;
  font-size: var(--g-font-size);
  border: 1px solid var(--g-border-color);
  background: var(--g-black);
  color: var(--g-white);
  padding: 13px 16px;
  border-radius: var(--g-border-radius);
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  .close-icon {
    display: flex;
    align-items: center;
    margin-left: 5em;
    cursor: pointer;
  }
}
$class-prefix: "position";
.#{$class-prefix} {
  &-top {
    top: 0;
    transform: translateX(-50%);
  }
  &-middle {
    top: 50%;
    transform: translate(-50%, -50%);
  }
  &-bottom {
    bottom: 0;
    transform: translateX(-50%);
  }
}
</style>
