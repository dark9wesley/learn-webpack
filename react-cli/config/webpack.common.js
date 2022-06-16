const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
        }
      ]
     }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React-Cli',
      template: path.resolve(__dirname, '../pubilc/index.html'),
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
}
