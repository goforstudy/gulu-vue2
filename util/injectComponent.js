// 加载当前文件下面, 以.vue结尾的文件(不包含子文件)
const importFn = require.context("../src", false, /\.vue$/);

export default {
  install(app) {
    importFn.keys().forEach((key) => {
      // 导入组件
      // importFn(key)将所有已经加载的文件路径进行导入
      // .default是获取组件中export default默认导出的内容
      // 这里的component就相当于导入的组件
      const component = importFn(key).default;

      // 注册组件
      app.component(component.name, component);
    });
  },
  readComponents() {
    const components = []
    importFn.keys().forEach((key) => {
      // 导入组件
      // importFn(key)将所有已经加载的文件路径进行导入
      // .default是获取组件中export default默认导出的内容
      // 这里的component就相当于导入的组件
      const component = importFn(key).default;
      components.push(component)
    });
    return components
  },
};
