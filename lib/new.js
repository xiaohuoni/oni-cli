'use strict';

var _path = require('path');

var _vinylFs = require('vinyl-fs');

var _vinylFs2 = _interopRequireDefault(_vinylFs);

var _fs = require('fs');

var _through = require('through2');

var _through2 = _interopRequireDefault(_through);

var _leftPad = require('left-pad');

var _leftPad2 = _interopRequireDefault(_leftPad);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function info(type, message) {
    console.log(_chalk2.default.green.bold((0, _leftPad2.default)(type, 12)) + '  ' + message);
}

function error(message) {
    console.error(_chalk2.default.red(message));
}

function success(message) {
    console.error(_chalk2.default.green(message));
}
exports.run = function (name) {
    var cwd = (0, _path.join)(__dirname, '../template');
    var hasName = typeof name === 'string';
    var dest = hasName ? process.cwd() + ('/' + name + '/') : process.cwd();
    var projectName = (0, _path.basename)(dest);
    console.log('Creating a new app in ' + dest + '.');
    console.log();

    _vinylFs2.default.src(['**/*', '!node_modules/**/*'], { cwd: cwd, cwdbase: true, dot: true }).pipe(template(dest, cwd)).pipe(_vinylFs2.default.dest(dest)).on('end', function () {
        info('rename', 'gitignore -> .gitignore');
        (0, _fs.renameSync)((0, _path.join)(dest, 'gitignore'), (0, _path.join)(dest, '.gitignore'));
        // if (true) {
        //     info('run', 'npm install');
        //     require('./install')(printSuccess);
        // } else {
        printSuccess();
        // }
    }).resume();

    function printSuccess() {
        success('\nSuccess! Created ' + projectName + ' at ' + dest + '.\n\nInside that directory, you can run several commands:\n  * npm start: Starts the development server.\n  * npm run build: Bundles the app into dist for production.\n  * npm test: Run test.\n\nWe suggest that you begin by typing:\n  cd ' + dest + '\n  npm start\n\nHappy hacking!');
    }
};

function template(dest, cwd) {
    return _through2.default.obj(function (file, enc, cb) {
        if (!file.stat.isFile()) {
            return cb();
        }

        info('create', file.path.replace(cwd + '/', ''));
        this.push(file);
        cb();
    });
}