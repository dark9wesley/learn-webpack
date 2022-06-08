const os = require('os')
const path = require('path')
const { merge } = require('webpack-merge')
const commonConfig  = require('./webpack.common')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

const threads = os.cpus().length;

const prodConfig = {
  mode: 'production',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/main.js',
    clean: true,
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin({
        parallel: threads
      })
    ]
  }
}

module.exports = merge(commonConfig, prodConfig)
