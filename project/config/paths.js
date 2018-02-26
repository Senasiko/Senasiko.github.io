const path = require('path');
const config = require('./config');

const srcPath = path.resolve(__dirname, '../src');
const resolveSrc = relativePath => path.resolve(srcPath, relativePath);

const homePage = path.resolve(__dirname, '../../');
const resolveHome = relativePath => path.resolve(homePage, relativePath);

module.exports = {
  pathDir: __dirname,
  scriptDir: path.resolve(__dirname, '../script'),
  srcPath,
  homePage,
  postsDir: resolveSrc('__posts'),
  staticDir: resolveSrc('static'),
  viewDir: resolveSrc('views'),

  vueDistPath: resolveSrc('components/vues/dist'),
  reactDistPath: resolveSrc('components/reacts/build'),

  postView: resolveHome('posts'),

  staticHome: resolveHome('static'),
};
