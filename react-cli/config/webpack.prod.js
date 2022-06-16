const path = require("path");
const { merge } = require('webpack-merge') 
const commonConfig = require('./webpack.common')

module.exports = merge(commonConfig, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "js/[name].[hash:10].js",
    clean: true
  },
  devtool: 'source-map',
})
