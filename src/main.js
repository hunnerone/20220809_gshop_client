import Vue from 'vue'
import App from './App.vue'
import router from './router'
import TypeNav from './components/TypeNav'
// 浏览器控制台不显示非生产环境的打包提示
// Vue.config.productionTip = false
// 将typenav组件注册为全局组件
Vue.component(TypeNav.name, TypeNav)
new Vue({
  render: (h) => h(App),
  router //注册路由器
}).$mount('#app')
