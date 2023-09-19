import "./index.scss";
import "./icon.js";
import injectAuto from "./util/injectComponent"
const components = injectAuto.readComponents();
const install = function (Vue, opts = {}) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};
export default { install };