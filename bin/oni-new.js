#!/usr/bin/env node

const program = require('commander');
const chalk = require('chalk')
const init = require('../lib/new');

program
.command('new')
.description('quick create your app')
.action(function(name){
    init.run(name);
});
program.parse(process.argv);