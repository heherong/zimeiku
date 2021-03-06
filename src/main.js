// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import ElementUI, {TabPane} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import App from './App'
import router from './router'

import axios from 'axios'
import VueAxios from 'vue-axios'
import Cookies from 'js-cookie'
import qs from 'qs' //请求


Vue.use(VueAxios, axios, qs);

import { post, fetch, patch, put } from './api/http'

//定义全局变量
Vue.prototype.$post = post;
Vue.prototype.$fetch = fetch;
Vue.prototype.$patch = patch;
Vue.prototype.$put = put;

Vue.prototype.$Cookies = Cookies;

//加入elementUi组件
Vue.use(ElementUI);

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: {
		App
	},
	template: '<App/>',
})