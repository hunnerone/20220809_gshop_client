import Vue from "vue";
import App from "./App.vue";
// 浏览器控制台不显示非生产环境的打包提示
// Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount("#app");
