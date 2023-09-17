<template>
  <div
    class="col"
    :class="colClass"
    :style="{ paddingLeft: gutter / 2 + 'px', paddingRight: gutter / 2 + 'px' }"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "GCol",
  props: {
    span: {
      type: [String, Number],
      default: 24,
    },
    offset: {
      type: [String, Number],
      default: 0,
    },
    xs: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    colClass() {
      let str = "";
      if (this.xs) {
        str += `${this.xs.span ? "xs-" + this.xs.span : ""} ${
          this.xs.offset ? "xs-offset-" + this.xs.offset : ""
        }`;
      }
      return [`col-${this.span} offset-${this.offset}`, str].join(" ");
    },
  },
  data() {
    return {
      gutter: 0,
    };
  },
};
</script>
<style lang="scss" scoped>
.col {
  width: 100%;
  $class: col-;
  @for $i from 1 through 24 {
    &.#{$class}#{$i} {
      width: calc($i / 24) * 100%;
    }
  }
  $offset: offset-;
  @for $i from 1 through 24 {
    &.#{$offset}#{$i} {
      margin-left: calc($i / 24) * 100%;
    }
  }
  @media (max-width: 576px) {
    $class: xs-;
    @for $i from 1 through 24 {
      &.#{$class}#{$i} {
        width: calc($i / 24) * 100%;
      }
    }
    $offset: xs-offset-;
    @for $i from 1 through 24 {
      &.#{$offset}#{$i} {
        margin-left: calc($i / 24) * 100%;
      }
    }
  }
}
</style>