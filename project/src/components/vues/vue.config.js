/**
 * Created by Senasiko on 2018/2/7.
 */

const path = require('path');
const paths = require('../../../config/paths');
const mainConfig = require('../../../config/config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackShellPlugin = require('webpack-shell-plugin');

module.exports = {
  configureWebpack: config => {
    if (process.env && process.env.NODE_ENV === 'production') {
      return {
        output: {
          filename: `${mainConfig.staticPath}/js/vue.[name].js`,
          chunkFilename: `${mainConfig.staticPath}/js/vue.[name].js`,
          publicPath: path.join(mainConfig.rootPath, mainConfig.staticPath)
        },
        module: {
          rules: [
            // {
            //   test: /\.tsx?$/,
            //   exclude: /node_modules/,
            //   use: {
            //     loader: 'awesome-typescript-loader',
            //     options: {
            //       useBabel: true,
            //     },
            //   },
            // },
            {
              test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
              loader: 'url-loader',
              options: {
                limit: 10000,
                name: `${mainConfig.staticPath}/img/[name].[ext]`
              }
            },
          ]
        },
        plugins: [
          // new HtmlWebpackPlugin({
          //   filename: `${paths.homePage}/index.html`,
          //   template: `${paths.homePage}/index.html`,
          //   inject: true,
          //   minify: {
          //     removeComments: true,
          //     collapseWhitespace: true,
          //     removeAttributeQuotes: true
          //     // more options:
          //     // https://github.com/kangax/html-minifier#options-quick-reference
          //   },
          //   // necessary to consistently work with multiple chunks via CommonsChunkPlugin
          //   chunksSortMode: 'dependency'
          // }),
          new ExtractTextPlugin({
            filename: `${mainConfig.staticPath}/css/[name].css`
          }),
          new WebpackShellPlugin({
            onBuildEnd: [`node ${paths.scriptDir}/copy.js vue`],
            safe: true,
          })
        ]
      };
    } else {
      return {
        module: {
          rules: [
            // {
            //   test: /\.tsx?$/,
            //   exclude: /node_modules/,
            //   use: {
            //     loader: 'awesome-typescript-loader',
            //     options: {
            //       useBabel: true,
            //     },
            //   },
            // },
          ]
        }
      };
    }
  },
};
