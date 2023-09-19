import Vue from 'vue'
import App from "./App.vue"
import GButton from "./src/button.vue"
import GIcon from "./src/icon.vue"
import GButtonGroup from "./src/button-group.vue"
import GInput from "./src/input.vue"
import GRow from "./src/row.vue"
import GCol from "./src/col.vue"
import GHeader from "./src/header.vue"
import GFooter from "./src/footer.vue"
import GContent from "./src/content.vue"
import GLayout from "./src/layout.vue"
import GSider from "./src/sider.vue"
import "./icon.js"
import "./index.scss"
Vue.component('g-button', GButton)
Vue.component('g-icon', GIcon)
Vue.component('g-button-group', GButtonGroup)
Vue.component('g-input', GInput)
Vue.component('g-row', GRow)
Vue.component('g-col', GCol)
Vue.component('g-header', GHeader)
Vue.component('g-footer', GFooter)
Vue.component('g-content', GContent)
Vue.component('g-layout', GLayout)
Vue.component('g-sider', GSider)
new Vue({
    el: "#app",
    render:(h) => h(App)
})