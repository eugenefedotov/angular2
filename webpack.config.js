'use strict';

module.exports = {
  entry   : {
    app: './src/bootstrap.ts',
    vendor: './src/vendor.ts'
  },
  output: {
    filename: './build/[name].js'
  },
  resolve : {
    extansions : ['', '.js', '.ts']
  },
  module  : {
    loaders : [
      {test : /\.ts$/, loaders : ['ts', 'angular2-template-loader'], exclude: /node_modules/}
    ]
  },
  plugins: [
    
  ]
};
