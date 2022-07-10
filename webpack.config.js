
const webpack = require('webpack')
module.exports = {
  entry: './src/index.js',

  module : {
    rules: [
      { test: /\.css$/i, use: ["style-loader", "css-loader"],},
    ],
  },
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
  },
}

