#!/usr/bin/env node

const program = require('commander');
const chalk = require('chalk')
const init = require('../lib/new');

program
.command('new')
.description('quick create your app')
.action(function(name,other){
    init.run(name,other);
});
program.parse(process.argv);