const fs = require('fs');
const sass = require('sass');
const csso = require('csso');

if (!fs.existsSync(__dirname + '/dist')) {
  fs.mkdirSync(__dirname + '/dist');
};

fs.readdirSync(__dirname + '/src/styles').forEach(file => {
  const result = sass.compile(__dirname + '/src/styles/' + file);
  fs.writeFileSync(__dirname + '/dist/' + file.replace('.scss', '.css'), result.css);
  fs.writeFileSync(__dirname + '/dist/' + file.replace('.scss', '.min.css'), csso.minify(result.css).css);
});