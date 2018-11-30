import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/main/index'
import Market from '@/pages/market/main/market'
import User from '@/pages/user/main/user'
import Login from '@/pages/login/login'
import Reg from '@/pages/reg/reg'
import Help from '@/pages/help/help'

import BuyerOrder from '@/pages/BuyerOrder/main/buyerOrder'
import ShoppingCart from '../pages/shoppingCart/main/shopping'
import ContentBank from '@/pages/contentBank/main/ContentBank'
import demandHall from '@/pages/demandHall/main/demandHall'
import Pay from '../pages/pay/pay'
import Registeragreement from '../pages/registeragreement/registeragreement'

//帮助中心二级路由
import Platform from '@/pages/help/children/platform'
import Helpinfo from '@/pages/help/children/helpinfo'
import Buyerguide from '@/pages/help/children/buyerguide'
import Sellerguide from '@/pages/help/children/sellerguide'
import Paymentsettlement from '@/pages/help/children/paymentsettlement'
import Auditstandards from '@/pages/help/children/auditstandards'

//a
import refer from '@/pages/refer/refer'

Vue.use(Router)

export default new Router({
//mode: 'history',
  mode:'hash',
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
      // meta:{
      //   Login_required :false
      // }
    },
    {
      path: '/Pay',
      name: 'Pay',
      component: Pay,
    },
    {
      path: '/ContentBank',
      name: 'ContentBank',
      component: ContentBank,
    },
    {
      path: '/demandHall',
      name: 'demandHall',
      component: demandHall,
    },
    {
      path:'/help',
      name:'help',
      component:Help,
      children:[
        {path:'platform',component:Platform},
        {path:'helpinfo',component:Helpinfo},
        {path:'buyerguide',component:Buyerguide},
        {path:'sellerguide',component:Sellerguide},
        {path:'auditstandards',component:Auditstandards},
        {path:'paymentsettlement',component:Paymentsettlement}
      ]
    },
    {
      path:'/registeragreement',
      name:'registeragreement',
      component:Registeragreement
    },
    {
      path:'/a',
      name:'refer',
      component:refer
    }
  ]
})
