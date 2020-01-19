const path = require("path");

var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },

      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
    alias: {
      root: [path.resolve(__dirname, "src"), path.resolve(__dirname, "node_modules")],
      components: path.resolve(__dirname, "./src/components"),
      views: path.resolve(__dirname, "./src/views"),
      store: path.resolve(__dirname, "./src/store")
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    })
  ]
};
