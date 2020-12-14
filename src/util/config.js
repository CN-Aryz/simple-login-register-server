const fs = require('fs');
const path = require('path');
const yaml = require('yaml');

const getConfig = function () {
  const config = fs.readFileSync(path.resolve(__dirname, './config.js'), 'utf-8');

  return yaml.parse(config);
}

module.exports = {
  getConfig
}