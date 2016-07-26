'use strict';

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
    extansions : ['', '.js', '.ts', '.html']
  },
  module  : {
    loaders : [
      {test : /\.ts$/, loaders : ['ts', 'angular2-template-loader'], exclude: /node_modules/},
      {test: /\.html$/, loader: 'raw'}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      chunksSortMode: 'dependency'
    })
  ]
};
