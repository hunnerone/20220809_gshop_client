// 路由组件
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
// 安装Vue插件
Vue.use(VueRouter)

// 路由重写， 防止未携带参数 跳转同一路由地址 会发生报错
// 缓存原型上的push函数
const originPush = VueRouter.prototype.push
const originReplace = VueRouter.prototype.replace
// 给原型对象上的push指定新函数函数
VueRouter.prototype.push = function (location, onComplete, onAbort) {
  // 判断如果没有指定回调函数, 通过call调用源函数并使用catch来处理错误
  if (onComplete === undefined && onAbort === undefined) {
    return originPush.call(this, location, onComplete, onAbort).catch(() => {})
  } else {
    // 如果有指定任意回调函数, 通过call调用源push函数处理
    originPush.call(this, location, onComplete, onAbort)
  }
}
// replace同理处理
VueRouter.prototype.replace = function (location, onComplete, onAbort) {
  if (onComplete === undefined && onAbort === undefined) {
    return originReplace
      .call(this, location, onComplete, onAbort)
      .catch(() => {})
  } else {
    originReplace.call(this, location, onComplete, onAbort)
  }
}

// 向外暴露路由器对象
export default new VueRouter({
  // 模式
  mode: 'history', //没有#的模式
  routes
})
