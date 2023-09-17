const { merge } = require('webpack-merge');
 const common = require('./webpack.common.js');
const path = require("path");
module.exports = merge(
  common, {
    mode: "production",
    entry: {
      index: path.resolve(__dirname, "../index.js")
    },
    externals: "vue",
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, "../dist"),
      libraryTarget: 'umd',
      library: '[name]',
    },
  }
);
