import GButton from "./src/button.vue";
import GButtonGroup from "./src/button-group.vue";
import GIcon from "./src/icon.vue";
import GInput from "./src/input.vue"
import GRow from "./src/row.vue"
import GCol from "./src/col.vue"
import "./index.scss";
import "./icon.js";
const components = [GButton, GButtonGroup, GIcon, GInput, GRow, GCol];
const install = function (Vue, opts = {}) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};
export default { GButton, GButtonGroup, GIcon, install };
