const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const EslintWebpackPlugin = require('eslint-webpack-plugin');

const setStyleLoaders = (preProcessor) => {
  return [
    'style-loader', 
    'css-loader',
    {
      loader: 'postcss-loader',
      options: {
        postcssOptions: {
          plugins: [
            'postcss-preset-env',
          ]
        }
      }
    },
    preProcessor
  ].filter(Boolean)
}

module.exports = {
  entry: "./src/index.jsx",
  module: {
    rules: [
     {
      oneOf: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        },
        {
          test: /\.css$/,
          use: setStyleLoaders()
        },
        {
          test: /\.less$/,
          use: setStyleLoaders('less-loader')
        },
        {
          test: /\.(png|svg|jpe?g|gif)$/i,
          type: 'asset',
          parser: {
            dataUrlCondition: {
              maxSize: 10 * 1024
            }
          },
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          type: 'asset/resource',
        }
      ]
     }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React-Cli',
      template: path.resolve(__dirname, '../pubilc/index.html'),
    }),
    new EslintWebpackPlugin({
      context: path.resolve(__dirname, '../src'),
      exclude: 'node_modules',
      cache: true,
      cacheLocation: path.resolve(__dirname, '../node_modules/.cache/.eslintcache'),
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
}
