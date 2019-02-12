const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const devMode = process.env.NODE_ENV !== 'production'

var config = {
  mode: devMode ? 'production' : 'development',
  output: {
    path: path.resolve('dist'),
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
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
        test: /\.(sa|sc|c)ss$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      }
    ]
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin(),
      new OptimizeCSSAssetsPlugin({})
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "main.css"
    }),
    new VueLoaderPlugin()
  ]
};

module.exports = [
  merge(config, {
    entry: path.resolve('src/index.js'),
    output: {
      filename: 'vlider.min.js',
      libraryTarget: 'window',
      library: 'Vlider',
    }
  }),
  merge(config, {
    entry: path.resolve('src/Vlider.vue'),
    output: {
      filename: 'vlider.js',
      libraryTarget: 'umd',
      library: 'vlider',
      umdNamedDefine: true
    }
  })
];
