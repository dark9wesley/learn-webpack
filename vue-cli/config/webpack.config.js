const path = require('path')
const { DefinePlugin } = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isDev = process.env.NODE_ENV === 'development'

const getStyleLoaders = (loader) => {
  return [
    isDev ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
    'css-loader',
    'postcss-loader',
    loader
  ].filter(Boolean)
}

module.exports = {
  mode: isDev ? 'development' : 'production',
  entry: './src/index.js',
  output: {
    path: isDev ? undefined : path.resolve(__dirname, '../dist'),
    filename: isDev ? 'js/[name].js' : 'js/[name].[contenthash:10].js',
    chunkFilename: isDev ? 'js/[name].chunk.js' : 'js/[name].[contenthash:10].chunk.js',
    assetModuleFilename: 'assets/[hash][ext][query]',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: getStyleLoaders()
      },
      {
        test: /\.less$/,
        use: getStyleLoaders('less-loader')
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
    ],
  },
  plugins: [
    new HtmlPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      title: 'vue-cli-demo',
    }),
    new VueLoaderPlugin(),
    new DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false,
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:10].css',
      chunkFilename: 'css/[name].[contenthash:10].chunk.css',
    })
  ],
  devServer: {
    port: 4000,
    open: true,
    hot: true,
    historyApiFallback: true,
  }
}
