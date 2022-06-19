const path = require('node:path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].[contenthash:10].js'
  },
  mode: 'development',
}
