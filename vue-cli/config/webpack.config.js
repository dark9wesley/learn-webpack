const path = require('node:path')
const HtmlPlugin = require('html-webpack-plugin')
const isDev = process.env.NODE_ENV === 'development'
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  mode: isDev ? 'development' : 'production',
  entry: './src/index.js',
  output: {
    path: isDev ? undefined : path.resolve(__dirname, '../dist'),
    filename: 'js/[name].[contenthash:10].js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
    ],
  },
  plugins: [
    new HtmlPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      title: 'vue-cli-demo',
    }),
    new VueLoaderPlugin(),
  ],
  devServer: {
    port: 4000,
    open: true,
    hot: true,
    historyApiFallback: true,
  }
}
