
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
    // TODO put [contenthash] in here when we now how to clean them up
    filename: 'index_bundle.js',
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'Hello World!',
  })],

}

