const path = require('path')
const { merge } = require('webpack-merge')
const commonConfig  = require('./webpack.common')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

const prodConfig = {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/main.js',
    clean: true,
  },
  plugins: [
    new CssMinimizerPlugin()
  ]
}

module.exports = merge(commonConfig, prodConfig)
