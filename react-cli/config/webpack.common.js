const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const EslintWebpackPlugin = require('eslint-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

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
    preProcessor && {
      loader: preProcessor,
      options: preProcessor === 'less-loader' ? {
        lessOptions: {
          modifyVars: { '@primary-color': '#1DA57A' },
          javascriptEnabled: true,
        },
      } : {}
    }
  ].filter(Boolean)
}

module.exports = {
  entry: "./src/index.jsx",
  module: {
    rules: [
     {
      oneOf: [
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
      template: path.resolve(__dirname, '../public/index.html'),
    }),
    new EslintWebpackPlugin({
      context: path.resolve(__dirname, '../src'),
      exclude: 'node_modules',
      cache: true,
      cacheLocation: path.resolve(__dirname, '../node_modules/.cache/.eslintcache'),
    }),
    new CopyWebpackPlugin({
      patterns: [
        { 
          from: path.resolve(__dirname, '../public'), 
          to: path.resolve(__dirname, '../dist'),
          globOptions: {
            ignore: ["**/index.html"],
          }, 
        },
      ],
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    runtimeChunk: {
      name: entrypoint => `runtime~${entrypoint.name}`,
    }
  }
}
