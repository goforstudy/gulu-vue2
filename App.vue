<template>
  <div id="app">
    <div class="content-wrapper wrapper">
      <g-layout>
        <g-header>header</g-header>
        <g-content>content</g-content>
        <g-footer>footer</g-footer>
      </g-layout>
    </div>
    <div class="content-wrapper wrapper">
      <g-layout>
        <g-header>header</g-header>
        <g-layout>
          <g-sider>sider</g-sider>
          <g-content>content</g-content>
        </g-layout>
        <g-footer>footer</g-footer>
      </g-layout>
    </div>
    <div class="content-wrapper wrapper">
      <g-layout>
        <g-sider>sider</g-sider>
        <g-layout>
          <g-header>header</g-header>
          <g-content>content</g-content>
          <g-footer>footer</g-footer>
        </g-layout>
      </g-layout>
    </div>
    <div class="wrapper">
      <g-row>
        <g-col span="12"><div></div></g-col>
        <g-col span="12"><div></div></g-col>
      </g-row>
      <g-row>
        <g-col span="4"><div></div></g-col>
        <g-col span="6" offset="2"><div></div></g-col>
        <g-col span="4"><div></div></g-col>
        <g-col span="8"><div></div></g-col>
      </g-row>
      <g-row :gutter="12">
        <g-col span="8"><div></div></g-col>
        <g-col span="8"><div></div></g-col>
        <g-col span="8"><div></div></g-col>
      </g-row>
      <g-row :gutter="12">
        <g-col span="8" :xs="{ span: 12 }"><div></div></g-col>
        <g-col span="8"><div></div></g-col>
        <g-col span="8"><div></div></g-col>
      </g-row>
    </div>
    <div class="wrapper" style="display: flex">
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
      inputValue: "123",
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
.content-wrapper {
  height: 200px;
  width: 300px;
  > div > div {
    border: 1px solid var(--g-border-color);
  }
  .header,
  .footer {
    background-color: #b3c0d1;
  }
  .content {
    background-color: #e9eef3;
  }
  .sider {
    background-color: #d3dce6;
  }
  .layout {
    height: 100%;
  }
}
.wrapper {
  .col {
    &:nth-child(2n) {
      div {
        background: lightgray;
        height: 20px;
      }
    }
    &:nth-child(2n + 1) {
      div {
        background: gray;
        height: 20px;
      }
    }
  }
}
</style>