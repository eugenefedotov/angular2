'use strict';

var webpack = require('webpack');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.join( __dirname, '/src'),
  entry   : {
    app: './bootstrap.ts',
    vendor: './vendor.ts',
    polyfills: './polyfills.ts'
  },
  output: {
    path: path.resolve(__dirname, '/build'),
    filename: '[name].js'
  },
  resolve : {
    extansions : ['', '.js', '.ts', '.html', '.sass']
  },
  module  : {
    loaders : [
      {test : /\.ts$/, loaders : ['ts', 'angular2-template-loader']},
      {test: /\.html$/, loader: 'raw'},
      {test: /\.css$/, loaders: ['css-to-string', 'style', 'css']},
      {test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/, loader: 'file?name=fonts/[name].[hash].[ext]?'}
    ]
  },
  plugins: [

    new CommonsChunkPlugin({
      name: ['vendor', 'polyfills']
    }),

    new HtmlWebpackPlugin({
      template: './index.html',
      chunksSortMode: 'dependency'
    })
  ]
};
