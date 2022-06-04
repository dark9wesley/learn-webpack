const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')

const devConfig = {
  mode: 'development',
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

