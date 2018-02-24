'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (done) {
  var npm = findNpm();
  runCmd(_which2.default.sync(npm), ['install'], function () {
    console.log(npm + ' install end');
    done();
  });
};

var _which = require('which');

var _which2 = _interopRequireDefault(_which);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function runCmd(cmd, args, fn) {
  args = args || [];
  var runner = require('child_process').spawn(cmd, args, {
    // keep color
    stdio: "inherit"
  });
  runner.on('close', function (code) {
    if (fn) {
      fn(code);
    }
  });
}

function findNpm() {
  var npms = process.platform === 'win32' ? ['tnpm.cmd', 'cnpm.cmd', 'npm.cmd'] : ['tnpm', 'cnpm', 'npm'];
  for (var i = 0; i < npms.length; i++) {
    try {
      _which2.default.sync(npms[i]);
      console.log('use npm: ' + npms[i]);
      return npms[i];
    } catch (e) {}
  }
  throw new Error('please install npm');
}

;
module.exports = exports['default'];