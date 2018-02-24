
const fs = require('fs-extra')

const name = 'hello'
const pageFile = './src/page/' + name + '/' + name + '.js'
const styleFile = './src/page/' + name + '/' + name + '.less'
fs.pathExists(pageFile, (err, exists) => {
    if (exists) {
        console.log('this file has created')
    } else {
        fs.copy('./src/template/page.js', pageFile, err => {
            if (err) return console.error(err)
    
            console.log(pageFile + '  has created')
        })
        fs.copy('./src/template/page.less', styleFile, err => {
            if (err) return console.error(err)
        
            console.log(styleFile + '  has created')
        })
    }
})

