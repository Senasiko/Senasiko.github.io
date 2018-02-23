const path = require('path');
const fs = require('fs-extra');
var execSync = require("child_process").execSync;
const pug = require('pug');

const config = require('../config/config');
const paths = require('../config/paths');
const handleMd = require('./handlerMd');
const handleMdFile = handleMd.handleMdFile;

/*
pug
 */

// compuile pug file
const compilePugFile = pugFile =>
  pug.compileFile(path.join(paths.viewDir, pugFile));

// write html file from view to homePage
const writeHtmlFile = (relativePath, pugRenderFunc, locals={}) => {
  const dir = path.resolve(paths.homePage, relativePath);
  fs.ensureDirSync(dir);
  fs.writeFileSync(path.join(dir, 'index.html'), pugRenderFunc({ ...config, ...locals}));
};

// compile index
const renderIndex = compilePugFile('index.pug');

// compile post
const renderPost = compilePugFile('post.pug');

// compile tags
const renderTags = compilePugFile('tags.pug');

let mds = handleMdFile();

// render index
writeHtmlFile('.', renderIndex, { mds, page: 1, total: mds.length, pageSize: config.pageSize });

// render posts
let pagePosts = [];
let tagPosts = {};
let nowPage = 1;
for (let md of mds) {
  const dir = md.fileDir;
  delete md.fileDir;
  writeHtmlFile(dir, renderPost, md);
  // render page
  pagePosts.push(md);
  if (pagePosts.length >= config.pageSize ) {
    // if is first page, filter
    if (nowPage > 1) {
      writeHtmlFile(`pages/${nowPage}`, renderIndex, { mds: pagePosts, page: nowPage, total: mds.length, pageSize: config.pageSize });
    }
    nowPage++;
    pagePosts = [];
  }

  // push tags
  if (md.config.tags && md.config.tags.length > 0) {
    for (let tag of md.config.tags) {
      let tagPost = {
        title: md.config.title,
        url: md.postUrl
      };
      tagPosts[tag]?tagPosts[tag].push(tagPost):tagPosts[tag] = [tagPost];
    }
  }
}

// render tagPosts
writeHtmlFile('tags', renderTags, { tagPosts });

/*
less
 */
execSync(`lessc ${path.join(paths.staticDir, 'css', 'main.less')} ${path.join(paths.staticDir, 'css', 'main.css')}`);


// copy static files
fs.copy(paths.staticDir, paths.staticHome);
