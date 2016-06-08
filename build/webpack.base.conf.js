const webpack = require('webpack')
const pkg = require('../package.json')

var banner = `${pkg.name} v${pkg.version}
(c) ${new Date().getFullYear()} ${pkg.author}
Released under the ${pkg.license} License.`

module.exports = {
  entry: './src/Peity.vue',
  output: {
    path: './dist',
    filename: 'vue-peity.js',
    library: 'VuePeity',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['', '.js', '.vue']
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  },
  vue: {
    loaders: {
      js: 'babel'
    }
  },
  plugins: [
    new webpack.BannerPlugin(banner)
  ]
}
