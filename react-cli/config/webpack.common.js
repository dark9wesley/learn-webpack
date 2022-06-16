const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: "./src/index.jsx",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "js/[name].js",
  },
  module: {
    rules: [
     {
      oneOf: [
        {
          test: /.js/,
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
