'use strict';

var fs = require('fs-extra');
var chalk = require('chalk');
exports.run = function (type, name) {
    var baseFilr = __dirname + '/../template/';
    switch (type) {
        case 'route':
            var pageFile = './src/page/' + name + '/' + name + '.js';
            var styleFile = './src/page/' + name + '/' + name + '.less';
            fs.pathExists(pageFile, function (err, exists) {
                if (exists) {
                    console.log('this file has created');
                } else {
                    fs.copy(baseFilr + 'page.js', pageFile, function (err) {
                        if (err) return console.error(err);
                        console.log(pageFile + '  has created');
                    });
                    fs.copy(baseFilr + 'page.less', styleFile, function (err) {
                        if (err) return console.error(err);

                        console.log(styleFile + '  has created');
                    });
                }
            });
            break;
        default:
            console.log(chalk.red('ERROR: uncaught type , you should input like $ oni g page demo'));
            console.log();
            console.log('  Examples:');
            console.log();
            console.log(chalk.gray('    # create a new page'));
            console.log('    $ oni g page product');
            console.log();
            console.log(chalk.gray('    # create a new component'));
            console.log('    $ oni g component  product');
            console.log();
            console.log(chalk.gray('    # create a new store'));
            console.log('    $ oni g store  product');
            console.log();
            break;
    }
};