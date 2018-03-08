const fs = require('fs-extra')
const chalk = require('chalk')
exports.run = function(type, name) {
    const baseFilr =  __dirname+'/../template/src/pages/example/';
    switch (type) {
        case 'route':
            const pageFile = './src/pages/' + name + '/' + name + '.js'
            const styleFile = './src/pages/' + name + '/' + name + '.less'
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




