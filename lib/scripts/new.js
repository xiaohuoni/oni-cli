'use strict';

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _yargsParser = require('yargs-parser');

var _yargsParser2 = _interopRequireDefault(_yargsParser);

var _create = require('../create');

var _create2 = _interopRequireDefault(_create);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var argv = (0, _yargsParser2.default)(process.argv.slice(2));

var _argv$_ = (0, _slicedToArray3.default)(argv._, 1),
    name = _argv$_[0];

(0, _create2.default)({
  name: name,
  isMobilaApp: argv.web || argv.mobile || false
});