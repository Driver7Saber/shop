/*
路由器对象模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

 import Home from '../pages/Home/home.vue'
 import Search from '../pages/Search/search.vue'
 import Order from '../pages/Order/order.vue'
 import Profile from '../pages/Profile/profile.vue'
 import Login from '../pages/Login/login.vue'

// 声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
  // 所有路由
  routes: [
    {
      path: '/home',
      component:Home, // 返回路由组件的函数, 只有执行此函数才会加载路由组件, 这个函数在请求对应的路由路径时才会执行
      meta:{
        showFooter:true
      }
    },
    {
      path: '/search',
      component: Search,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/order',
      component: Order,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/login',
      component: Login,
     
    },
    {
      path: '/',
      redirect: '/home'
    },
    
  
  ]
})