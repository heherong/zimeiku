import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/main/index'
import Market from '@/pages/market/main/market'
import User from '@/pages/user/main/user'
import Login from '@/pages/login/login'
import Reg from '@/pages/reg/reg'
import Help from '@/pages/help/help'

import BuyerOrder from '@/pages/BuyerOrder/main/buyerOrder'
import ShoppingCart from '@/pages/shoppingCart/main/shopping'
import ContentBank from '@/pages/contentBank/main/ContentBank'
import demandHall from '@/pages/demandHall/main/demandHall'

//购物车二级路由
import cartArticle from '@/pages/shoppingCart/children/cart_article'
import cartAuthor from '@/pages/shoppingCart/children/cart_author'
// import cartDistribution from '@/pages/shoppingCart/children/cart_distribution'

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
      children:[
        {path:'cart_article',component:cartArticle},
        {path:'cart_author',component:cartAuthor},
        //营销账号 {path:'cart_distribution',component:cartDistribution}
      ]
      // meta:{
      //   Login_required :false
      // }
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
      component:Help
    }
  ]
})
