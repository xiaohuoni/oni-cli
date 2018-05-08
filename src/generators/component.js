import assert from 'assert';
import ejs from 'ejs';
import uppercamelcase from 'uppercamelcase';
import { join, basename } from 'path';
import { existsSync, statSync, readFileSync, writeFileSync } from 'fs';
import { outputFileSync } from "fs-extra";

function directoryExists(path) {
  return existsSync(path) && statSync(path).isDirectory();
}

function fileExists(path) {
  return existsSync(path) && statSync(path).isFile();
}

function stripEmptyLine(content) {
  const ret = content
    .trim()
    // 两行 -> 一行
    .replace(/\n\n/g, '\n');

  // 结尾空行
  return `${ret}\n`;
}

export default function(opts = {}) {
  const { file ,pagename} = opts;
  const cwd = opts.cwd || process.cwd();

  console.log(`generate component ${file}`);

  let cssTargetPath;
  let jsTargetPath;
  const fileName = basename(file);
  const componentName = uppercamelcase(fileName);
  if (pagename) {
    assert(
      !directoryExists(join(cwd, 'src', 'pages',pagename, componentName)),
      `directory src/pages/${pagename}/${componentName} exists`,
    );
    jsTargetPath = join(cwd, 'src', 'pages',pagename,'components', componentName, 'index.js');
    cssTargetPath = join(cwd, 'src', 'pages',pagename,'components', componentName, 'index.less');
  } else {
    assert(
      !directoryExists(join(cwd, 'src', 'components', componentName)),
      `directory src/page/${file} exists`,
    );
    jsTargetPath = join(cwd, 'src', 'components', componentName,`index.js`);
    cssTargetPath = join(cwd, 'src', 'components',componentName ,`index.less`);
  }

  assert(!fileExists(jsTargetPath), `file src/.../${componentName} exists`);
  assert(!fileExists(cssTargetPath), `file src/.../${componentName} exists`);

  const jsTpl = readFileSync(
    join(__dirname, '../../template/component/Example.js'),
    'utf-8',
  );
  const cssTpl = readFileSync(
    join(__dirname, '../../template/component/Example.less'),
    'utf-8',
  );

  
  const jsContent = ejs.render(
    jsTpl,
    {
      componentName,
    },
    {
      _with: false,
      localsName: 'oni',
    },
  );


  outputFileSync(jsTargetPath, stripEmptyLine(jsContent), 'utf-8');
  outputFileSync(cssTargetPath, stripEmptyLine(cssTpl), 'utf-8');
}
