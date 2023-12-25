const fs = require('fs');

module.exports = {
  text: fs.readFileSync(__dirname + '/../dist/text.scss', 'utf-8'),
};