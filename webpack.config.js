
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  devtool: "cheap-module-source-map",
  module : {
    rules: [
      { test: /\.css$/i, use: ["style-loader", "css-loader"],},
    ],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle_[chunkhash].js',
    clean: true,
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'Hello World!',
  })],

}

