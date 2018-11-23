const host = process.env.NODE_ENV === 'development'
? '/api/'
: process.env.NODE_ENV === 'production'
    ? 'http://api.zimeiku.com/api/'
    : '/api/'

export default host