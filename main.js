import Vue from 'vue'
import App from "./App.vue"
import GButton from "./src/button.vue"
import GIcon from "./src/icon.vue"
import GButtonGroup from "./src/button-group.vue"
Vue.component('g-button', GButton)
Vue.component('g-icon', GIcon)
Vue.component('g-button-group', GButtonGroup)
new Vue({
    el: "#app",
    render:(h) => h(App)
})
import chai, { expect } from "chai"
import spies from 'chai-spies'
{
    const div = document.createElement("div")
    document.body.appendChild(div)
    const except = chai.expect
    const Constructor = Vue.extend(GButton)
    const button = new Constructor({
        propsData: {
            icon: "setting"
        }
    })
    button.$mount(div)
    let useElement = button.$el.querySelector("use")
    except(useElement.getAttribute("xlink:href")).to.eq("#setting")
    button.$el.remove()
    button.$destroy()
}
{
    const div = document.createElement("div")
    document.body.appendChild(div)
    const except = chai.expect
    const Constructor = Vue.extend(GButton)
    const button = new Constructor({
        propsData: {
            icon: "setting",
            loading: true
        }
    })
    button.$mount(div)
    let useElement = button.$el.querySelector("use")
    except(useElement.getAttribute("xlink:href")).to.eq("#loading")
    button.$el.remove()
    button.$destroy()
}
{
    const div = document.createElement("div")
    document.body.appendChild(div)
    const except = chai.expect
    const Constructor = Vue.extend(GButton)
    const button = new Constructor({
        propsData: {
            icon: "setting",
            iconPosition: "right"
        }
    })
    button.$mount(div)
    const svg = button.$el.querySelector("svg")
    const order = window.getComputedStyle(svg).order
    except(order).to.eq("2")
    button.$el.remove()
    button.$destroy()
}
{
    chai.use(spies)
    const div = document.createElement("div")
    document.body.appendChild(div)
    const except = chai.expect
    const Constructor = Vue.extend(GButton)
    const button = new Constructor({
        propsData: {
            icon: "setting",
            iconPosition: "right"
        }
    })
    button.$mount(div)
    const spy = chai.spy(() => {})
    button.$on('click', spy)
    button.$el.click()
    expect(spy).to.have.been.called()
    button.$el.remove()
    button.$destroy()
}