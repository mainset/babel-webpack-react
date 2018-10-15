/* eslint-disable */
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

var babelConfig = require('../../babel.config');

var rootPath = path.join(__dirname, '..', '..');
/* eslint-enable */

module.exports = {
  entry: ['@babel/polyfill', path.join(rootPath, 'src/main.js')],
  output: {
    path: path.join(rootPath, 'public'),
    filename: 'dist/scripts.js',
  },
  module: {
    rules: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: babelConfig,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.join(rootPath, 'src/index.template.html') }),
  ],
};
