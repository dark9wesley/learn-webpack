const path = require('node:path')
const HtmlPlugin = require('html-webpack-plugin')
const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  mode: isDev ? 'development' : 'production',
  entry: './src/index.js',
  output: {
    path: isDev ? undefined : path.resolve(__dirname, '../dist'),
    filename: 'js/[name].[contenthash:10].js'
  },
  plugins: [
    new HtmlPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      title: 'vue-cli-demo',
    }),
  ]
}
