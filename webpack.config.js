const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');

module.exports = {
  entry: {
    app: './mr/build/static/js/main.fe51d198.js'
  },
  output: {
    path: __dirname,
    filename: '[name].js',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.js', '.pug']
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: "pug-loader",
      }
    ]
  },
  plugins: [
    new StaticSiteGeneratorPlugin({
      crawl: true
    }),
  ]
}
