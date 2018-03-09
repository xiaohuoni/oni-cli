const fs = require('fs-extra')
const chalk = require('chalk')
exports.run = function(type, name,other) {
    const hasOther = typeof other === 'string';
    const baseFilr =  __dirname+'/../template/src/pages/example/';
    switch (type) {
        case 'page':
            const pageFile = './src/pages/' + name + '/page.js';
            const styleFile = './src/pages/' + name + '/page.less';
            const servicesFile = './src/pages/' + name + '/services/'+name+'.js';
            const modelsFile = './src/pages/' + name + '/models/'+name+'.js';
            const componentsFile = './src/pages/' + name + '/components/'+name.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase())+'.js';
            fs.pathExists(pageFile, (err, exists) => {
                if (exists) {
                    console.log('this file has created')
                } else {
                    fs.copy(`${baseFilr}page.js`, pageFile, err => {
                        if (err) return console.error(err)
                        console.log(pageFile + '  has created')
                    })
                    fs.copy(`${baseFilr}page.less`, styleFile, err => {
                        if (err) return console.error(err)
                        console.log(styleFile + '  has created')
                    })
                    fs.copy(`${baseFilr}/services/example.js`, servicesFile, err => {
                        if (err) return console.error(err)
                        console.log(servicesFile + '  has created')
                    })
                    fs.copy(`${baseFilr}/models/example.js`, modelsFile, err => {
                        if (err) return console.error(err)
                        console.log(modelsFile + '  has created')
                    })
                    fs.copy(`${baseFilr}/components/Example.js`, componentsFile, err => {
                        if (err) return console.error(err)
                        console.log(componentsFile + '  has created')
                    })
                }
            })
            break;
        case 'component':
            const componentFile = hasOther?'./src/pages/' + other + '/components/'+name.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase())+'.js':'./src/components/'+name.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase())+'.js';
            fs.pathExists(pageFile, (err, exists) => {
                if (exists) {
                    console.log('this file has created')
                } else {
                    fs.copy(`${baseFilr}/components/Example.js`, componentFile, err => {
                        if (err) return console.error(err)
                        console.log(componentFile + '  has created')
                    })
                }
            })
            break;
        default:
            console.log(chalk.red(`ERROR: uncaught type , you should input like $ oni g page demo` ))
            console.log()
            console.log('  Examples:')
            console.log()
            console.log(chalk.gray('    # create a new page'))
            console.log('    $ oni g page product')
            console.log()
            console.log(chalk.gray('    # create a new component'))
            console.log('    $ oni g component  product')
            console.log()
            console.log(chalk.gray('    # create a new store'))
            console.log('    $ oni g store  product')
            console.log()
            break;
    }
};