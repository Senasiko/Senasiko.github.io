const path = require('path');
const fs = require('fs-extra');
const pug = require('pug');

const config = require('../config/config');
const pathConfig = require('../config/paths');

// render index
const renderIndex = pug.compileFile(path.join(pathConfig.viewPath, 'index.pug'));

fs.ensureDirSync(pathConfig.homePage);
fs.writeFileSync(path.join(pathConfig.homePage, 'index.html'), renderIndex(config));
