// The Vue build version to load with the `import` command  herong
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import ElementUI, { TabPane } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import App from './App'
import router from './router'


//加入elementUi组件
Vue.use(ElementUI);

Vue.config.productionTip = false


// 路由拦截
router.beforeEach((to, from, next) => {
  //判断是否登录，使用vuex好点
  const loggin_in = true;
  if(to.name!=='/login'){
    if(loggin_in && to.matched.some(function(item){
    return item.meta.Login_required
    })){
      next('/login');
    }else{
      next();
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
