const fs = require('fs-extra');
const path = require('path');
const markdown = require('markdown-it')();

const paths = require('../config/paths');


// read md file in __posts
const readMdFile = () =>
  fs.readdirSync(paths.postsDir);

// get md file static path
const getMdFileStaticPath = fileName =>
  path.join(paths.postsDir, fileName);

// parse file name for get postName, date
const parseFileName = fileName => {
  let fileNameNoExt = fileName.split('.')[0];
  fileNameNoExt.match(/(\d+-\d+-\d+)-(.+$)/);
  let date = RegExp.$1;
  let postName = RegExp.$2;
  let fileDir = path.resolve(paths.postView, ...date.split('-'), postName);
  let postUrl = path.resolve('/posts', ...date.split('-'), postName);
  return {
    postName,
    date,
    fileDir,
    postUrl
  }
};

// parse file for get post config and content
const parseFile = fileName => {
  // read file
  let mdContent = fs.readFileSync(getMdFileStaticPath(fileName)).toString();
  // match config and content
  let hasConfig = mdContent.match(/---\n((?:.|\n)*)\n---\n((?:.|\n)*)/);
  let content = markdown.render(hasConfig? RegExp.$2: mdContent) + '';
  let config = {};
  // if hasConfig, parse it
  if (hasConfig) {
    let configArea = hasConfig[1];
    // parse to config item
    let configItems = configArea.split(/\n+/);
    for (item of configItems) {
      item.split(/\s*(.+):\s*(.+)/);
      config[RegExp.$1] = RegExp.$2;
      // if this config can parse, parse it
      try {
        config[RegExp.$1] = JSON.parse(RegExp.$2.replace(/(')|(")/g, '\"'));
      }catch(e) {

      }

    }
  }
  return {
    config,
    content
  }
};


/*
  mdModal = {
    config: {},
    content: '',
    date: '',
    fileDir: '',
    postName: '',
  }
 */
const handleMdFile = () => {
  let resultMds = [];
  let mds = readMdFile();
  for (let md of mds) {
    let mdModal = {
      config: {},
      content: '',
      date: '',
      fileDir: '',
      postName: '',
      // get create date and post name
      ...parseFileName(md),
      ...parseFile(md)
    };
    resultMds.push(mdModal)
  }
  resultMds.sort((a, b) => new Date(b.date) - new Date(a.date));
  return resultMds;
};

module.exports = {
  handleMdFile
};
