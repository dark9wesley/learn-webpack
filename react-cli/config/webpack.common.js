const path = require("path");

module.exports = {
  mode: 'development',
  entry: "./src/index.js",
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
  }
}
