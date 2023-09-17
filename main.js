import Vue from 'vue'
import App from "./App.vue"
import GButton from "./src/button.vue"
import GIcon from "./src/icon.vue"
import GButtonGroup from "./src/button-group.vue"
import "./icon.js"
import "./index.scss"
Vue.component('g-button', GButton)
Vue.component('g-icon', GIcon)
Vue.component('g-button-group', GButtonGroup)
new Vue({
    el: "#app",
    render:(h) => h(App)
})