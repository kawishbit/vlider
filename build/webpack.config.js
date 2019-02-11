const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

var config = {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, '../dist'),
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        include: __dirname,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test:/\.(s*)css$/,
        use:[
          {
            loader: 'file-loader',
            options: {
              name: 'css/main.css',
            }
          },
          'style-loader',
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: false,
          mangle: true
        },
        sourceMap: false
      })
    ]
  }
}

module.exports = [
  merge(config, {
    entry: path.resolve(__dirname, '../src/Vlider.vue'),
    output: {
      filename: 'vlider.js',
      libraryTarget: 'umd',
      library: 'vlider',
      umdNamedDefine: true
    }
  })
]
