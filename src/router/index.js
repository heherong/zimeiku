import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/main/index'
import Market from '@/pages/market/main/market'
import User from '@/pages/user/main/user'
import Login from '@/pages/login/login'
import Reg from '@/pages/reg/reg'

import BuyerOrder from '@/pages/BuyerOrder/main/buyerOrder'
import ShoppingCart from '@/pages/shoppingCart/main/shopping'
import ContentBank from '@/pages/contentBank/main/ContentBank'


Vue.use(Router)

export default new Router({
  mode: 'history',
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
      component: Market,
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
      component: Login,
      meta:{
        title:'登录',
        requestAuto: true
      },
      
    },
    {
      path: '/reg',
      name: 'reg',
      component: Reg,
    },
    {
      path: '/buyerorder',
      name: 'buyerorder',
      component: BuyerOrder,
    },
    {
      //购物车
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
  ]
})
