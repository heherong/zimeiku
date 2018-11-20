const host = process.env.NODE_ENV === 'development'
? '/api/'
: process.env.NODE_ENV === 'production'
    ? 'http://lisheng.miaoting.me/'
    : '/api/'

export default host