import Toast from "./toast.vue";
let toast
export default {
  install(Vue, options) {
    Vue.prototype.$toast = function (message, options) {
      let Constructor = Vue.extend(Toast);
      if(toast) {
        toast.close()
      }
      toast = new Constructor({
        propsData: {
          ...options,
        },
      });
      toast.$slots.default = [message];
      toast.$on("clear", () => {
        toast = null
      })
      toast.$mount();
      document.body.appendChild(toast.$el);
    };
  },
};
