const { merge } = require('webpack-merge');
const commonConfig = require("./webpack.common");
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = merge(commonConfig, {
  mode: 'development',
  output: {
    path: undefined,
    filename: "js/[name].js",
    assetModuleFilename: "asssets/[name][ext][query]",
    chunkFilename: "js/[name].chunk.js",
  },
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              cacheCompression: false,
              plugins: [require.resolve('react-refresh/babel')],
            }
          },
        ]
      }
    ]
  },
  plugins: [
    new ReactRefreshWebpackPlugin()
  ],
  devServer: {
    open: true,
    port: 3000,
    hot: true,
  },
  devtool: 'cheap-module-source-map',
})
