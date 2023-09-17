<template>
  <div class="wrapper" :class="{ error }">
    <input
      :value="value"
      :disabled="disabled"
      :readonly="readonly"
      type="text"
      @input="(e) => $emit('change', e.target.value)"
    />
    <template v-if="error">
      <g-icon name="error" />
      <span>{{ error }}</span>
    </template>
  </div>
</template>
<script>
export default {
  name: "GInput",
  model: {
    prop: "value",
    event: "change",
  },
  props: {
    value: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    error: {
      type: String,
      default: "",
    },
  },
};
</script>
<style lang="scss" scoped>
$height: 32px;
$border-color: #999;
$border-hover-color: #666;
$border-radius: 4px;
$font-size: 12px;
$box-shadow-color: rgba(0, 0, 0, 0.5);
.wrapper {
  font-size: $font-size;
  display: flex;
  align-items: center;
  > input {
    height: $height;
    border: 1px solid $border-color;
    border-radius: 4px;
    padding: 0 8px;
    font-size: inherit;
    &:hover {
      border-color: $border-hover-color;
    }
    &:focus {
      box-shadow: inset 0 1px 3px $box-shadow-color;
      outline: none;
    }
    &[disabled],
    &[readonly] {
      border-color: var(--g-disabled);
      color: var(--g-disabled);
      cursor: not-allowed;
    }
  }
  &.error {
    > input {
      border-color: var(--g-error);
    }
    > :not(:last-child) {
      margin-right: 0.5em;
    }
    svg {
      color: var(--g-error);
    }
    span {
      color: var(--g-error);
    }
  }
}
</style>