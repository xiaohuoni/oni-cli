'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var file = opts.file,
      pagename = opts.pagename;

  var cwd = opts.cwd || process.cwd();

  console.log('generate component ' + file);

  var cssTargetPath = void 0;
  var jsTargetPath = void 0;
  var fileName = (0, _path.basename)(file);
  var componentName = (0, _uppercamelcase2.default)(fileName);
  if (pagename) {
    (0, _assert2.default)(!directoryExists((0, _path.join)(cwd, 'src', 'pages', pagename, componentName)), 'directory src/pages/' + pagename + '/' + componentName + ' exists');
    jsTargetPath = (0, _path.join)(cwd, 'src', 'pages', pagename, 'components', componentName, 'index.js');
    cssTargetPath = (0, _path.join)(cwd, 'src', 'pages', pagename, 'components', componentName, 'index.less');
  } else {
    (0, _assert2.default)(!directoryExists((0, _path.join)(cwd, 'src', 'components', componentName)), 'directory src/pages/' + file + ' exists');
    jsTargetPath = (0, _path.join)(cwd, 'src', 'components', componentName, 'index.js');
    cssTargetPath = (0, _path.join)(cwd, 'src', 'components', componentName, 'index.less');
  }

  (0, _assert2.default)(!fileExists(jsTargetPath), 'file src/.../' + componentName + ' exists');
  (0, _assert2.default)(!fileExists(cssTargetPath), 'file src/.../' + componentName + ' exists');

  var jsTpl = (0, _fs.readFileSync)((0, _path.join)(__dirname, '../../template/component/Example.js'), 'utf-8');
  var cssTpl = (0, _fs.readFileSync)((0, _path.join)(__dirname, '../../template/component/Example.less'), 'utf-8');

  var jsContent = _ejs2.default.render(jsTpl, {
    componentName: componentName
  }, {
    _with: false,
    localsName: 'oni'
  });

  (0, _fsExtra.outputFileSync)(jsTargetPath, stripEmptyLine(jsContent), 'utf-8');
  (0, _fsExtra.outputFileSync)(cssTargetPath, stripEmptyLine(cssTpl), 'utf-8');
};

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _ejs = require('ejs');

var _ejs2 = _interopRequireDefault(_ejs);

var _uppercamelcase = require('uppercamelcase');

var _uppercamelcase2 = _interopRequireDefault(_uppercamelcase);

var _path = require('path');

var _fs = require('fs');

var _fsExtra = require('fs-extra');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function directoryExists(path) {
  return (0, _fs.existsSync)(path) && (0, _fs.statSync)(path).isDirectory();
}

function fileExists(path) {
  return (0, _fs.existsSync)(path) && (0, _fs.statSync)(path).isFile();
}

function stripEmptyLine(content) {
  var ret = content.trim()
  // 两行 -> 一行
  .replace(/\n\n/g, '\n');

  // 结尾空行
  return ret + '\n';
}

module.exports = exports['default'];