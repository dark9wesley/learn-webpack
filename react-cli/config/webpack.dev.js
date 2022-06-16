const { merge } = require('webpack-merge');
const commonConfig = require("./webpack.common");

module.exports = merge(commonConfig, {
  devServer: {
    open: true,
    port: 3000,
    hot: true,
  }
})
