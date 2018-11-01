import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/pages/index/main/index'
import Market from '@/components/pages/market/main/market'
import User from '@/components/pages/user/main/user'
import Login from '@/components/pages/login/login'
import ShoppingCart from '@/components/pages/shoppingCart/main/shopping'
import ContentBank from '@/components/pages/contentBank/main/ContentBank'
// import Order from '@/components/pages/order/main/order'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/market',
      name: 'market',
      component: Market
    },
    {
      path: '/user',
      name: 'user',
      component: User,
      // 路由拦截使用
      // meta:{
      //   title:"个人中心",
      //   requireAuth:true
      // }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/shoppingcart',
      name: 'shoppingcart',
      component: ShoppingCart,
      meta:{
        Login_required :false
      }
    },
    {
      path: '/ContentBank',
      name: 'ContentBank',
      component: ContentBank,
      
    },
    //购物车
    // {
    //   path: '/order',
    //   name: 'order',
    //   component: Order,
    //   meta: {
    //     title: '购物车',
    //     requireAuth: true
    //   }
    // },
  ]
})
