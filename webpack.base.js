const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    publicPath: "/",
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "@styles": path.resolve(__dirname, "src/styles/"),
      "@templates": path.resolve(__dirname, "src/components/templates/"),
      "@components": path.resolve(__dirname, "src/components/"),
      "@atoms": path.resolve(__dirname, "src/components/atoms/"),
      "@molecules": path.resolve(__dirname, "src/components/molecules/"),
      "@organisms": path.resolve(__dirname, "src/components/organisms/"),
      "@routes": path.resolve(__dirname, "src/routes/"),
      "@assets": path.resolve(__dirname, "src/assets/"),
      "@hooks": path.resolve(__dirname, "src/hooks/"),
      "@config": path.resolve(__dirname, "src/config/"),
      "@contexts": path.resolve(__dirname, "src/contexts/"),
      "@utils": path.resolve(__dirname, "src/utils/"),
      "@icons": path.resolve(__dirname, "src/assets/icons/"),
      "@images": path.resolve(__dirname, "src/assets/images/"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack", "svg-url-loader"],
      },
      {
        test: /\.woff2?$/,
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[name].[contenthash][ext]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
    }),
  ],
};
