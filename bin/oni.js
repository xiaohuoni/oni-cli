#!/usr/bin/env node
'use strict';
//v1.0.0-rc.09版本之后的代码参考dva-cli
const chalk = require('chalk');
const program = require('commander');
const spawn = require('win-spawn');
const join = require('path').join;
const resolve = require('path').resolve;
const exists = require('fs-extra').existsSync;

program
    .version(require('../package').version)
    .on('--help', printHelp)
    .usage('<command> [options]')
    // .command('new', 'Creates a new application')
    // .command('generate', ' Generates new code (short-cut alias: "g")')
    .parse(process.argv)
const aliases = {
    g: 'generate',
};
const args = process.argv.slice(3);
let subcmd = program.args[0];
if (aliases[subcmd]) subcmd = aliases[subcmd];
if (!subcmd) {
    program.help();
} else {
    require(`./oni-${subcmd}.js`)
}
function printHelp() {
    console.log('  Commands:');
    console.log();
    console.log('    new            Creates a new application');
    console.log('    generate       Generates new code (short-cut alias: "g")');
    console.log();
    console.log('  All commands can be run with -h (or --help) for more information.')
}
