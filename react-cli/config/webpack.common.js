const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const EslintWebpackPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: "./src/index.jsx",
  module: {
    rules: [
     {
      oneOf: [
        {
          test: /.jsx?/,
          exclude: /node_modules/,
          use: 'babel-loader'
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
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
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
}
