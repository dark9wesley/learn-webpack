const { merge } = require('webpack-merge');
const commonConfig = require("./webpack.common");

module.exports = merge(commonConfig, {
  mode: 'development',
  output: {
    path: undefined,
    filename: "js/[name].[hash:10].js",
  },
  devServer: {
    open: true,
    port: 3000,
    hot: true,
  },
  devtool: 'cheap-module-source-map',
})
