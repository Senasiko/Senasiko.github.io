const path = require('path');
const fs = require('fs-extra');
const pug = require('pug');

const config = require('../config/config');
const pathConfig = require('../config/paths');

// compuile pug file
const compuilePugFile = pugFile =>
  pug.compileFile(path.join(pathConfig.viewPath, pugFile));

// write html file from view to homePage
const writeHtmlFile = (relativePath, pugRenderFunc, locals={}) => {
  const dir = path.resolve(pathConfig.homePage, relativePath);
  fs.ensureDirSync(dir);
  fs.writeFileSync(path.join(dir, 'index.html'), pugRenderFunc({ ...config, locals}));
}

// render index
const renderIndex = compuilePugFile('index.pug');

// render post
const renderPost = compuilePugFile('post.pug');

writeHtmlFile('.', renderIndex);
writeHtmlFile('./posts/', renderPost);
