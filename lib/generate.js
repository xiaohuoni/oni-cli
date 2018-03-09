'use strict';

var fs = require('fs-extra');
var chalk = require('chalk');
exports.run = function (type, name, other) {
    var hasOther = typeof other === 'string';
    var baseFilr = __dirname + '/../template/src/pages/example/';
    switch (type) {
        case 'page':
            var pageFile = './src/pages/' + name + '/page.js';
            var styleFile = './src/pages/' + name + '/page.less';
            var servicesFile = './src/pages/' + name + '/services/' + name + '.js';
            var modelsFile = './src/pages/' + name + '/models/' + name + '.js';
            var componentsFile = './src/pages/' + name + '/components/' + name.toLowerCase().replace(/( |^)[a-z]/g, function (L) {
                return L.toUpperCase();
            }) + '.js';
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
                    fs.copy(baseFilr + '/services/example.js', servicesFile, function (err) {
                        if (err) return console.error(err);
                        console.log(servicesFile + '  has created');
                    });
                    fs.copy(baseFilr + '/models/example.js', modelsFile, function (err) {
                        if (err) return console.error(err);
                        console.log(modelsFile + '  has created');
                    });
                    fs.copy(baseFilr + '/components/Example.js', componentsFile, function (err) {
                        if (err) return console.error(err);
                        console.log(componentsFile + '  has created');
                    });
                }
            });
            break;
        case 'component':
            var componentFile = hasOther ? './src/pages/' + other + '/components/' + name.toLowerCase().replace(/( |^)[a-z]/g, function (L) {
                return L.toUpperCase();
            }) + '.js' : './src/components/' + name.toLowerCase().replace(/( |^)[a-z]/g, function (L) {
                return L.toUpperCase();
            }) + '.js';
            fs.pathExists(pageFile, function (err, exists) {
                if (exists) {
                    console.log('this file has created');
                } else {
                    fs.copy(baseFilr + '/components/Example.js', componentFile, function (err) {
                        if (err) return console.error(err);
                        console.log(componentFile + '  has created');
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