#!/usr/bin/env node

const program = require('commander');
const chalk = require('chalk')
const oni = require('../lib/generate');

program
.command('generate')
.description('quick generate your file')
.alias('g')
.action(function(type, name){
    oni.run(type, name);
});
program.parse(process.argv);