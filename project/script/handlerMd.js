const fs = require('fs-extra');
const path = require('path');
const markdown = require('markdown').markdown;

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
  return {
    postName,
    date,
    fileDir
  }
};

// parse file for get post config and content
const parseFile = fileName => {
  // read file
  let mdContent = fs.readFileSync(getMdFileStaticPath(fileName)).toString();
  // match config and content
  let hasConfig = mdContent.match(/---\n((?:.|\n)*)\n---\n((?:.|\n)*)/);
  let content = markdown.toHTML(hasConfig? RegExp.$2: mdContent);
  let config = {};
  // if hasConfig, parse it
  if (hasConfig) {
    let configArea = RegExp.$1;
    // parse to config item
    let configItems = configArea.split(/\n+/);
    for (item of configItems) {
      item.split(/\s*(.+):\s*(.+)/);
      config[RegExp.$1] = RegExp.$2;
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
  return resultMds;
};

module.exports = {
  handleMdFile
};
