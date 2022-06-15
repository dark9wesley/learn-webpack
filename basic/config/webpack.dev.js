const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')

const devConfig = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  output: {
    filename: 'main.js'
  },
  devServer: {
    host: 'localhost',
    port: '8000',
    open: true
  }
}


module.exports = merge(commonConfig, devConfig)

