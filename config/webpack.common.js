const path = require('path')
const eslintPlugin = require('eslint-webpack-plugin')
const htmlPlugin = require('html-webpack-plugin')
const miniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.less$/,
        use: [
          miniCssExtractPlugin.loader, 
          'css-loader', 
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  'postcss-preset-env'
                ]
              }
            }
          },
          'less-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|jpe?g|gif)$/i,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024
          }
        },
        generator: {
          filename: 'static/images/[hash:10][ext]'
        }
      },
      {
        test: /\.(ttf|woff2?)$/,
        type: 'asset/resource',
        generator: {
          filename: 'static/front/[hash:10][ext]'
        }
      }
    ],
  },
  plugins: [
    new eslintPlugin({
      context: path.resolve(__dirname, '../src')
    }),
    new htmlPlugin({
      template: path.resolve(__dirname, '../public/index.html')
    }),
    new miniCssExtractPlugin({
      filename: 'css/main.css'
    }),
  ],
}
