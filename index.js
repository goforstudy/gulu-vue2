import "./index.scss";
import "./icon.js";
import injectAuto from "./util/injectComponent"
import toast from "./src/plugin.js"
const components = injectAuto.readComponents();
const install = function (Vue, opts = {}) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
  toast.install(Vue)
};
export default { install };