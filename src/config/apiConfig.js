const host = process.env.NODE_ENV === 'development'
? '/api/'
: process.env.NODE_ENV === 'production'
    ? 'http://www.zimeiku.com/'
    : '/api/'

export default host