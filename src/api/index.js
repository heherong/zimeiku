import axios from 'axios'
import host from '@/config/apiConfig'

// export const getUuid = () => axios.get(host + '/school/backend/login/getUuid');//获取uuid
// 
// export const getCheckcode = host + '/school/backend/login/captcha?uuid=';//获取验证码


export const qrcode = (params) => axios.get(host + "/api/qrcode", {params}); // 获取二维码

export const login = (params) => axios.post(host + "/api/login", params); // 轮询请求获取是否登入

export const addSolicit = (params) => axios.post(host + "/api/solicit/add", params); //添加征稿令

export const getSolicitMyList = (params) => axios.get(host + "/api/solicit/mylist", {params}); // 我的征稿令列表

export const addArticle = (params) => axios.post(host + "/api/article/add", params); // 添加文章

export const getMyArticleList = (params) => axios.get(host + "/api/article/mylist", {params}); // 我的文章

export const buyArticle = (params) => axios.post(host + "/api/article/buy", params); // 购买文章

export const getArticleList = (params) => axios.get(host + "/api/article/list", {params}); // 文章列表

export const addSolicitArticle = (params) => axios.post(host + "/api/solicit/add_article", params); // 投稿

export const allowSolicit = (params) => axios.post(host + "/api/solicit/allow", params); // 采纳投稿

export const getFieldsList = (params) => axios.get(host + "/api/fields/list", {params}); // 领域列表

export const getSolicitList = (params) => axios.get(host + "/api/solicit/list", {params}); // 征文列表

export const getArticleInfo = (params) => axios.get(host + "/api/article/info", {params}); // 文章详情

export const getSolicitMyInfo = (params) => axios.get(host + "/api/solicit/myinfo", {params}); // 征稿详细

export const getSolicitInfo = (id) => axios.get(host + "/api/solicit/info?solicit_id=" + id); // 证稿详情

export const checkArticle = (params) => axios.post(host + "/api/article/check", params); // 文章内容检测

export const getSolicitArticleList = (params) => axios.get(host + "/api/solicit/article_list", {params}); // 符合征稿条件的文章列表

export const getSolicitRecord = (params) => axios.get(host + "/api/solicit/record", {params}); // 该征稿投稿记录

export const addCart = (params) => axios.post(host + "/api/cart/add", params); // 添加购物车

export const delCart = (params) => axios.post(host + "/api/cart/del", params); // 删除购物车

export const cartList = (params) => axios.post(host + "/api/cart/list", params); // 购物车列表

export const orderSureorder = (params) => axios.post(host + "/api/order/sureorder", params); // 确认订单信息

export const orderAdd = (params) => axios.post(host + "/api/order/add", params); // 提交订单

export const orderBuy = (params) => axios.post(host + "/api/order/buy", params); // 购买文章