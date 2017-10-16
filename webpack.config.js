var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:3080',
    'webpack/hot/only-dev-server',
    './main.js'
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'react-hot-loader!babel-loader'
    }]
 },
resolve: {
    extensions: ['*', '.js', '.jsx']
  },
node: {
      fs: 'empty',
      net: 'empty',
      tls: 'empty',
      dns: 'empty'
},
  output: {
    path: __dirname,
    publicPath: '/',
    filename: './bundle.js'
  },

  devServer: {
    contentBase: './',
    hot: true,

  },
};
