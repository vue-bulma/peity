const webpack = require('webpack')
const base = require('./webpack.base.conf')

var config = Object.assign({}, base)

config.output.filename = 'vue-peity.min.js'

config.plugins = (config.plugins || []).concat([
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"production"'
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }),

  new webpack.optimize.OccurenceOrderPlugin()
])

module.exports = config
