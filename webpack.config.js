const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const DIR = process.env.npm_package_config_dir;
const PORT = process.env.npm_package_config_dev_port;

const staticDir = path.resolve(__dirname, DIR);

module.exports = {
  entry: './src/index.js',
  devtool: "cheap-module-source-map",
  module : {
    rules: [
      { test: /\.css$/i, use: ["style-loader", "css-loader"],},
    ],
  },
  mode: "none",
  output: {
    path: staticDir,
    filename: 'index_bundle_[chunkhash].js',
    clean: true,
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'Hello World!',
  })],

  devServer: {
    static: staticDir,
    port: PORT,
  },

}

