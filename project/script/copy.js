/**
 * Created by Senasiko on 2018/2/8.
 */
const fs = require('fs-extra');
const path = require('path');
const mainConfig = require('../config/config');
const paths = require('../config/paths');

const params = process.argv[2];

const copyFileToStatic = (src) =>  {
  process.stdout.write(`copy ${params}\nsrc: ${src}\n`);
  // delete old css dir
  fs.removeSync(path.join(paths.homePage, 'css/'));

  fs.copySync(src, paths.homePage, {
    filter: (src, dest) => !src.match(/(index\.html)/)
  });
};

switch (params) {
  case 'vue':
    copyFileToStatic(paths.vueDistPath);
    break;
  default:
    break;
}

