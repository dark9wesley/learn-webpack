const path = require('path');
const { DefinePlugin } = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';

const getStyleLoaders = (loader) => [
  isDev ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
  'css-loader',
  {
    loader: 'postcss-loader',
    options: {
      postcssOptions: {
        plugins: ['postcss-preset-env'],
      }
    }
  },
  loader,
].filter(Boolean);

module.exports = {
  mode: isDev ? 'development' : 'production',
  entry: './src/index.js',
  output: {
    path: isDev ? undefined : path.resolve(__dirname, '../dist'),
    filename: isDev ? 'js/[name].js' : 'js/[name].[contenthash:10].js',
    chunkFilename: isDev ? 'js/[name].chunk.js' : 'js/[name].[contenthash:10].chunk.js',
    assetModuleFilename: 'assets/[hash][ext][query]',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: getStyleLoaders(),
      },
      {
        test: /\.less$/,
        use: getStyleLoaders('less-loader'),
      },
      {
        test: /\.(jpe?g|png|svg|gif)$/i,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 4kb
          },
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource',
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.resolve(__dirname, '../src'),
        options: {
          cacheDirectory: true,
          cacheCompression: false,
        }
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
    }),
    new ESLintWebpackPlugin({
      context: path.resolve(__dirname, '../src'),
      exclude: 'node_modules',
      cache: true,
      cacheLocation: path.resolve(__dirname, '../node_modules/.cache/.eslintcache'),
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    runtimeChunk: {
      name: (entryPoint) => `runtime~${entryPoint.name}` 
    }
  },
  resolve: {
    extensions: ['json', '.js', '.vue'],
  },
  devServer: {
    port: 4000,
    open: true,
    hot: true,
    historyApiFallback: true,
  },
  devtool: isDev ? 'cheap-module-source-map' : 'source-map',
};
