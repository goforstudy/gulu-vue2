const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
      {
        test: /\.s[ac]ss$|\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
    ],
  },
  // optimization: {
  //   splitChunks: {
  //     chunks: "all",
  //     filename: '[name].bundle.js',
  //     minSize: 0,
  //     minRemainingSize: 0,
  //     minChunks: 1,
  //     enforceSizeThreshold: 1,
  //     minSize: 0
  //   },
  // },
  plugins: [new VueLoaderPlugin()],
};
