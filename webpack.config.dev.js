const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebapckPlugin = require('html-webpack-plugin')
module.exports = {
  mode: 'development',
  entry: [
    '/src/app.js'
  ],
  devServer: {
    hot: true,
    watchOptions: {
      poll: true
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebapckPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    })
  ]
}