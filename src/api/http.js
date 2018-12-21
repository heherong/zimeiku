import axios from 'axios'
import host from '@/config/apiConfig'
import { Message, Loading } from 'element-ui';
import router from '@/router/index'
import Cookies from 'js-cookie'
import qs from 'qs' //请求

/**
 *公共加载方法 
 */
let loading //定义loading变量
function startLoading(content) { //使用Element loading-start 方法
	loading = Loading.service({
		lock: true,
		text: content ? content : '加载中……',
		background: 'rgba(0, 0, 0, 0.7)'
	})
}

function endLoading() { //使用Element loading-close 方法
	loading.close()
}

//那么 showFullScreenLoading() tryHideFullScreenLoading() 要干的事儿就是将同一时刻的请求合并。
//声明一个变量 needLoadingRequestCount，每次调用showFullScreenLoading方法 needLoadingRequestCount + 1。
//调用tryHideFullScreenLoading()方法，needLoadingRequestCount - 1。needLoadingRequestCount为 0 时，结束 loading。
let needLoadingRequestCount = 0;
export function showFullScreenLoading() {
	if(needLoadingRequestCount === 0) {
		startLoading()
	}
	needLoadingRequestCount++
}

export function tryHideFullScreenLoading() {
	if(needLoadingRequestCount <= 0) return
	needLoadingRequestCount--
	if(needLoadingRequestCount === 0) {
		endLoading()
	}
}
//host 是域名 后面加接口
//export const getUuid = () => axios.get(host + '/school/backend/login/getUuid');

axios.defaults.timeout = 100000;
axios.defaults.baseURL = host;
axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';
//http request 拦截器
axios.interceptors.request.use(
	config => {
		// console.log(config);
		const token = Cookies.get('token');
		if(config.method == 'post'){
			config.data = qs.stringify(config.data);
			showFullScreenLoading()
		} else if (config.method == 'get'){
			console.log(config,22222);
			if(config.url=='/api/qrcode') {
				return;
			}
			showFullScreenLoading()
			
		}
		config.headers = {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
		if(token) {
			if(!config.params){
				config.params = {'token':token}
			}else{
				config.params['token'] = token
			}
		} //注意使用的时候需要引入cookie方法，推荐js-cookie
		return config;
	},
	error => {
		return Promise.reject(err);
	}
);
//http response 拦截器
axios.interceptors.response.use(
	response => {
		//当返回信息为未登录或者登录失效的时候重定向为登录页面
		if(response.data.code == 401) {
			//清除cookie token name headeImg
			Cookies.remove('name');
			Cookies.remove('token');
			Cookies.remove('headeImg');
			router.push({
				path: "/login",
				query: {
					redirect: router.currentRoute.fullPath
				} //从哪个页面跳转
			})
		}
		tryHideFullScreenLoading()
		return response.data;
	},
	error => {
		return Promise.reject(error)
	}
)
/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function fetch(url, params = {},config = { showLoading: false }) {
	return new Promise((resolve, reject) => {
		axios.get(url, {
				params: params
			},config, {
				withCredentials: true,
				crossDomain: true
			})
			.then(response => {
				resolve(response.data);
			})
			.catch(err => {
				reject(err)
			})
	})
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url, data = {},config = { showLoading: false }) {
	return new Promise((resolve, reject) => {
		axios.post(url, data,config)
			.then(response => {
				resolve(response.data);
			}, err => {
				reject(err)
			})
	})
}

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function patch(url, data = {}) {
	return new Promise((resolve, reject) => {
		axios.patch(url, data)
			.then(response => {
				resolve(response.data);
			}, err => {
				reject(err)
			})
	})
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put(url, data = {}) {
	return new Promise((resolve, reject) => {
		axios.put(url, data)
			.then(response => {
				resolve(response.data);
			}, err => {
				reject(err)
			})
	})
}