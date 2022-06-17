const path = require("path");
const { merge } = require('webpack-merge') 
const commonConfig = require('./webpack.common')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const setStyleLoaders = (preProcessor) => {
  return [
    MiniCssExtractPlugin.loader,
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
    'less-loader'
  ].filter(Boolean)
}

module.exports = merge(commonConfig, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "js/[name].[contenthash:10].js",
    assetModuleFilename: "asssets/[contenthash:10][ext][query]",
    chunkFilename: "js/[name].[contenthash:10].chunk.js",
    clean: true
  },
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.css$/,
            use: [
              MiniCssExtractPlugin.loader,
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
              }
            ]
          },
          {
            test: /\.less$/,
            use: [
              MiniCssExtractPlugin.loader,
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
              'less-loader'
            ]
          },
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash:10].css',
    })
  ],
  devtool: 'source-map',
})
