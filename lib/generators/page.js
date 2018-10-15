"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var file = opts.file;

  (0, _assert2.default)(!("isDirectory" in opts) || typeof opts.isDirectory === "boolean", "opts.isDirectory should be boolean");
  (0, _assert2.default)(!("useClass" in opts) || typeof opts.useClass === "boolean", "opts.useClass should be boolean");
  var isDirectory = opts.isDirectory || true;

  var cwd = opts.cwd || process.cwd();

  console.log("generate index " + file);

  var lessTargetPath = void 0;
  var jsTargetPath = void 0;
  var modelTargetPath = void 0;
  var serviceTargetPath = void 0;
  var cjsTargetPath = void 0;
  var clessTargetPath = void 0;

  if (isDirectory) {
    (0, _assert2.default)(!directoryExists((0, _path.join)(cwd, "src", "pages", file)), "directory src/index/" + file + " exists");
    jsTargetPath = (0, _path.join)(cwd, "src", "pages", file, "index.js");
    lessTargetPath = (0, _path.join)(cwd, "src", "pages", file, "index.less");
    modelTargetPath = (0, _path.join)(cwd, "src", "pages", file, "models", file + ".js");
    serviceTargetPath = (0, _path.join)(cwd, "src", "pages", file, "services", file + ".js");
    cjsTargetPath = (0, _path.join)(cwd, "src", "pages", file, "components", "Example.js");
    clessTargetPath = (0, _path.join)(cwd, "src", "pages", file, "components", "Example.less");
  } else {
    jsTargetPath = (0, _path.join)(cwd, "src", "pages", file + ".js");
    lessTargetPath = (0, _path.join)(cwd, "src", "pages", file + ".less");
  }

  (0, _assert2.default)(!fileExists(jsTargetPath), "file src/index/" + file + " exists");
  (0, _assert2.default)(!fileExists(modelTargetPath), "file src/index/" + file + " exists");
  (0, _assert2.default)(!fileExists(lessTargetPath), "file src/index/" + file + " exists");
  (0, _assert2.default)(!fileExists(serviceTargetPath), "file src/index/" + file + " exists");
  (0, _assert2.default)(!fileExists(cjsTargetPath), "file src/index/" + file + " exists");
  (0, _assert2.default)(!fileExists(clessTargetPath), "file src/index/" + file + " exists");

  var jsTpl = (0, _fs.readFileSync)((0, _path.join)(__dirname, "../../template/example/index.js"), "utf-8");
  var cssTpl = (0, _fs.readFileSync)((0, _path.join)(__dirname, "../../template/example/index.less"), "utf-8");
  var sTpl = (0, _fs.readFileSync)((0, _path.join)(__dirname, "../../template/example/services/haha.js"), "utf-8");
  var mTpl = (0, _fs.readFileSync)((0, _path.join)(__dirname, "../../template/example/models/haha.js"), "utf-8");
  var ccTpl = (0, _fs.readFileSync)((0, _path.join)(__dirname, "../../template/example/components/Example.less"), "utf-8");
  var cjTpl = (0, _fs.readFileSync)((0, _path.join)(__dirname, "../../template/example/components/Example.js"), "utf-8");

  var fileName = (0, _path.basename)(file);
  var jsContent = _ejs2.default.render(jsTpl, {
    fileName: fileName
  }, {
    _with: false,
    localsName: "oni"
  });

  var mContent = _ejs2.default.render(mTpl, { fileName: fileName }, {
    _with: false,
    localsName: "oni"
  });

  (0, _fsExtra.outputFileSync)(jsTargetPath, stripEmptyLine(jsContent), "utf-8");
  (0, _fsExtra.outputFileSync)(lessTargetPath, cssTpl, "utf-8");
  (0, _fsExtra.outputFileSync)(serviceTargetPath, sTpl, "utf-8");
  (0, _fsExtra.outputFileSync)(modelTargetPath, stripEmptyLine(mContent), "utf-8");
  (0, _fsExtra.outputFileSync)(clessTargetPath, ccTpl, "utf-8");
  (0, _fsExtra.outputFileSync)(cjsTargetPath, cjTpl, "utf-8");
};

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _ejs = require("ejs");

var _ejs2 = _interopRequireDefault(_ejs);

var _uppercamelcase = require("uppercamelcase");

var _uppercamelcase2 = _interopRequireDefault(_uppercamelcase);

var _path = require("path");

var _fs = require("fs");

var _fsExtra = require("fs-extra");

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
  .replace(/\n\n/g, "\n");

  // 结尾空行
  return ret + "\n";
}

module.exports = exports["default"];