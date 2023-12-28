const fs = require('fs');
const sass = require('sass');
const csso = require('csso');

if (!fs.existsSync(__dirname + '/dist')) {
  fs.mkdirSync(__dirname + '/dist');
};

const license = '/*\n\n' + fs.readFileSync(__dirname + '/LICENSE', 'utf-8') + '\n*/\n\n';

fs.readdirSync(__dirname + '/src/styles').forEach(file => {
  const result = sass.compile(__dirname + '/src/styles/' + file);
  fs.writeFileSync(__dirname + '/dist/' + file.replace('.scss', '.css'), license + result.css);
  fs.writeFileSync(__dirname + '/dist/' + file.replace('.scss', '.min.css'), license + csso.minify(result.css).css);
});