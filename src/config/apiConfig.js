const host = process.env.NODE_ENV === 'development'
? 'http://api.zimeiku.com'
: process.env.NODE_ENV === 'production'
    ? 'http://api.zimeiku.com'
    : 'http://api.zimeiku.com'

export default host