import Vue from 'vue'
import App from "./App.vue"
import "./icon.js"
import "./index.scss"
import injectAuto from "./util/injectComponent"
import toast from "./src/plugin.js"
injectAuto.install(Vue)
toast.install(Vue)
new Vue({
    el: "#app",
    render:(h) => h(App)
})