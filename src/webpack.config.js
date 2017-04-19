var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: "./index.js",
  output: {
    path: path.join(__dirname, "../js"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        exclude: /(node_modules|bower_components)/,
        test: /\.js$/,
minor fixes        use: ["babel-loader"]
      }
    ]
  },
  watch: true,
  stats: {
    colors: true
  },
  devServer: { inline: true },
  devtool: "cheap-module-source-map"
};
