<template>
  <div id="app">
    <div class="wrapper">
      {{inputValue}}
      <g-input v-model="inputValue"></g-input>
      <g-input v-model="inputValue" disabled></g-input>
      <g-input v-model="inputValue" readonly></g-input>
      <g-input v-model="inputValue" error="错误提示"></g-input>
    </div>
    <div class="wrapper">
      <g-button icon="setting" icon-position="left">button</g-button>
      <g-button icon="download" iconPosition="left">no icon</g-button>
      <g-button icon="setting" icon-position="right">button</g-button>
      <g-button
        @click="changeLoading"
        :loading="loading"
        icon="setting"
        icon-position="left"
        >button</g-button
      >
      <g-button
        @click="changeLoading"
        :loading="loading"
        icon="download"
        iconPosition="left"
        >no icon</g-button
      >
      <g-button
        @click="changeLoading"
        :loading="loading"
        icon="setting"
        icon-position="right"
        >button</g-button
      >
    </div>
    <div class="wrapper">
      <g-button-group>
        <g-button icon="left" icon-position="left">button</g-button>
        <g-button icon="right" iconPosition="right">no icon</g-button>
      </g-button-group>
      <g-button-group>
        <g-button icon="left" icon-position="left">button</g-button>
        <g-button>more</g-button>
        <g-button icon="right" iconPosition="right">no icon</g-button>
      </g-button-group>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: false,
      inputValue: '123'
    };
  },
  methods: {
    changeLoading() {
      this.loading = !this.loading;
    },
  },
};
</script>
<style lang="scss" scoped>
.wrapper {
  margin: 20px;
}
</style>