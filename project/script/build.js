const path = require('path');
const fs = require('fs-extra');
const pug = require('pug');

const config = require('../config/config');
const paths = require('../config/paths');
const handleMd = require('./handlerMd');
const handleMdFile = handleMd.handleMdFile;

// compuile pug file
const compilePugFile = pugFile =>
  pug.compileFile(path.join(paths.viewDir, pugFile));

// write html file from view to homePage
const writeHtmlFile = (relativePath, pugRenderFunc, locals={}) => {
  const dir = path.resolve(paths.homePage, relativePath);
  fs.ensureDirSync(dir);
  fs.writeFileSync(path.join(dir, 'index.html'), pugRenderFunc({ ...config, ...locals}));
}

// compile index
const renderIndex = compilePugFile('index.pug');

// compile post
const renderPost = compilePugFile('post.pug');

writeHtmlFile('.', renderIndex);

let mds = handleMdFile();
for (let md of mds) {
  writeHtmlFile(md.fileDir, renderPost, md);
}

// copy static files
fs.copy(paths.staticDir, paths.staticHome);
