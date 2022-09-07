// 所有路由匹配的数组
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Register from '@/pages/Register'
import Login from '@/pages/Login'

export default [
  {
    path: '/',
    component: Home
  },
  {
    name: 'search',
    path: '/search/:keyword?', // 实现params参数可传可不传 加一个？
    component: Search,
    // props:true //只映射params 参数
    // 一下方法使用函数形式传递props数据
    props: (route) => ({
      keyword3: route.params.keyword,
      keyword4: route.query.keyword2
    })
  },
  {
    name: 'register',
    path: '/register',
    component: Register,
    meta: {
      isHideFooter: false
    }
  },
  {
    name: 'login',
    path: '/login',
    component: Login,
    meta: {
      isHideFooter: true
    }
  }
]
