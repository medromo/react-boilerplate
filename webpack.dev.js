const path = require("path");
const { merge } = require("webpack-merge");
const base = require("./webpack.base.js");
const Dotenv = require("dotenv-webpack");

module.exports = merge(base, {
  mode: "development",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [new Dotenv()],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
      watch: true,
    },
    watchFiles: path.join(__dirname, "./**"),
    compress: true,
    historyApiFallback: true,
    port: 8080,
    open: {
      app: {
        name: "Google Chrome",
      },
    },
  },
});
