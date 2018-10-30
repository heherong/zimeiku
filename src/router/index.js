import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/pages/index/main/index'
import Market from '@/components/pages/market/main/market'
import User from '@/components/pages/user/main/user'
import Login from '@/components/pages/login/login'
import Shopping from '@/components/pages/shopping/main/shopping'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
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
      component: User
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/shopping',
      name: 'shopping',
      component: Shopping
    },
  ]
})
