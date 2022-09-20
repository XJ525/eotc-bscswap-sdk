
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./eotc-bscswap-sdk.cjs.production.min.js')
} else {
  module.exports = require('./eotc-bscswap-sdk.cjs.development.js')
}
