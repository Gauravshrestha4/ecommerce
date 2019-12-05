var webpack = require("webpack");
var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const VENDORLIBS = ["react", "react-dom"];
module.exports = {
  entry: {
    bundle: "./src/index.js",
    vendor: VENDORLIBS
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].[chunkhash].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        use: ["style-loader", "css-loader"],
        test: /\.css$/
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ["vendor", "manifest"]
    }),
    new HtmlWebpackPlugin({
      template: "public/index.html"
    })
  ]
};
