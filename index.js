import GButton from "./src/button.vue";
import GButtonGroup from "./src/button-group.vue";
import GIcon from "./src/icon.vue";
import "./index.scss";
import "./icon.js";
const components = [GButton, GButtonGroup, GIcon];
const install = function (Vue, opts = {}) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};
export default { GButton, GButtonGroup, GIcon, install };
