const host = process.env.NODE_ENV === 'production'
  ? 'https://weixin.jcweixiaoyuan.com'
  : process.env.NODE_ENV === 'test-production'
    ? 'https://test-weixin.jcweixiaoyuan.com'
    : 'http://dev-lumen.jcweixiaoyuan.cn'
	
export default host