<template>
  <button @click="$emit('click')" class="g-button" :class="{ [`icon-${iconPosition}`]: true }">
    <g-icon v-if="loading" name="loading" class="loading icon"></g-icon>
    <g-icon v-if="icon && !loading" :name="icon"></g-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>
<script>
export default {
  name: 'GButton',
  props: {
    icon: {
      type: String,
      default: "",
    },
    iconPosition: {
      type: String,
      default: "left",
      validator(value) {
        return !!["right", "left"].includes(value);
      },
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
};
</script>
<style lang="scss" scoped>
$icon-gap: 0.3em;
@keyframes spin {
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
}
.g-button {
  font-size: var(--g-font-size);
  height: var(--g-button-height);
  padding: 0 1em;
  border-radius: var(--g-border-radius);
  border: 1px solid var(--g-border-color);
  background: var(--g-button-bg);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: top; // 防止inline元素无法对齐
  .loading{
    animation: spin infinite 2s linear;
  }
  .icon {
    order: 1;
    margin-right: $icon-gap;
  }
  .content {
    order: 2;
  }
  &.icon-right {
    .icon {
      order: 2;
      margin-right: 0;
      margin-left: $icon-gap;
    }
    .content {
      order: 1;
    }
  }
  &:hover {
    border-color: var(--g-border-color-hover);
  }
  &:active {
    border-color: var(--g-button-active-bg);
  }
  &:focus {
    outline: none;
  }
}
</style>