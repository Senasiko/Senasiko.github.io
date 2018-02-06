const path = require('path');
const config = require('./config');

const srcPath = path.resolve(__dirname, '../src');
const resolveSrc = relativePath => path.resolve(srcPath, relativePath);

const homePage = path.resolve(__dirname, '../../');
const resolveHome = relativePath => path.resolve(homePage, relativePath);

module.exports = {
  srcPath,
  homePage,
  postsDir: resolveSrc('__posts'),
  staticDir: resolveSrc(config.staticPath),
  viewDir: resolveSrc('views'),
  postView: resolveHome('posts'),
  staticHome: resolveHome(config.staticPath),
};
