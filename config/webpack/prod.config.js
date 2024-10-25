/* eslint-disable */
var { merge } = require('webpack-merge');
var TerserPlugin = require('terser-webpack-plugin');
var path = require('path');

var common = require('./common.config.js');

var rootPath = path.join(__dirname, '..', '..');
/* eslint-enable */

module.exports = merge(common, {
  output: {
    filename: 'dist/scripts.[hash].js',
  },
  optimization: {
    minimizer: [
      new TerserPlugin(),
    ],
  },
});
