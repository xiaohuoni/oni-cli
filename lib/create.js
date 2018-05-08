'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var name = opts.name,
      isMobilaApp = opts.isMobilaApp;

  var gitUrl = isMobilaApp ? 'https://github.com/xiaohuoni/dva-umi-mobile' : 'https://github.com/xiaohuoni/dva-umi';
  (0, _assert2.default)(name, 'opts.name should be supplied');
  (0, _assert2.default)(typeof name === 'string', 'opts.name should be string');
  (0, _install2.default)('git', ['clone', gitUrl, name], function () {
    console.log('create end');
  });
};

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _install = require('./utils/install');

var _install2 = _interopRequireDefault(_install);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];