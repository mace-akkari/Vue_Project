const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebapckPlugin = require('html-webpack-plugin')
module.exports = {
  mode: 'development',
  entry: [
    './src/app.js'
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebapckPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    })
  ]
}