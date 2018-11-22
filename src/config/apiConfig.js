const host = process.env.NODE_ENV === 'development'
? '/api/'
: process.env.NODE_ENV === 'production'
<<<<<<< HEAD
    ? 'http://api.zimeiku.com'
    : '/api/'

=======
    ? 'http://api.zimeiku.com/api/'
    : '/api/'

>>>>>>> 2a20adcb40c194fc6c9cd7a33727828453102609
export default host