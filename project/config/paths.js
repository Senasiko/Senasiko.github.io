const path = require('path');

const srcPath = path.resolve(__dirname, '../src');
const resolveSrc = relativePath => path.resolve(srcPath, relativePath);

const homePage = path.resolve(__dirname, '../../');
const resolveHome = relativePath => path.resolve(homePage, relativePath);

module.exports = {
  srcPath,
  homePage,
  viewPath: resolveSrc('views'),
  postView: resolveHome('posts'),
}
