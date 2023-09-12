const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin")
module.exports = {
  mode: "development",
  entry: "./main.js",
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
      {
        test: /\.s[ac]ss$|\.css$/i,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ]
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new VueLoaderPlugin()
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
  },
};
