'use strict';

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _yargsParser = require('yargs-parser');

var _yargsParser2 = _interopRequireDefault(_yargsParser);

var _generate = require('../generate');

var _generate2 = _interopRequireDefault(_generate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var argv = (0, _yargsParser2.default)(process.argv.slice(2));

var _argv$_ = (0, _slicedToArray3.default)(argv._, 3),
    type = _argv$_[0],
    file = _argv$_[1],
    pagename = _argv$_[2];

(0, _generate2.default)({
  type: type,
  file: file,
  pagename: pagename,
  useClass: argv.c || argv.class || false,
  isDirectory: argv.d || argv.directory || false
});