const path = require('path')
const { merge } = require('webpack-merge')
const commonConfig  = require('./webpack.common')

const prodConfig = {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/main.js',
    clean: true,
  }
}

module.exports = merge(commonConfig, prodConfig)
