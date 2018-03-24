import { join, basename } from 'path';
import vfs from 'vinyl-fs';
import { renameSync } from 'fs';
import through from 'through2';
import leftPad from 'left-pad';
import chalk from 'chalk';

function info(type, message) {
    console.log(`${chalk.green.bold(leftPad(type, 12))}  ${message}`);
}

function error(message) {
    console.error(chalk.red(message));
}

function success(message) {
    console.error(chalk.green(message));
}
exports.run = function(name,other) {
    const hasOther = typeof other === 'string' && (other === "app"||other === "mobile");
    const cwd = join(__dirname, hasOther?'../template_app':'../template');
    const hasName = typeof name === 'string';
    const dest = hasName?process.cwd()+`/${name}/`:process.cwd();
    const projectName = basename(dest);
    console.log(`Creating a new app in ${dest}.`);
    console.log();

    vfs.src(['**/*', '!node_modules/**/*'], { cwd: cwd, cwdbase: true, dot: true })
        .pipe(template(dest, cwd))
        .pipe(vfs.dest(dest))
        .on('end', function () {
            info('rename', 'gitignore -> .gitignore');
            renameSync(join(dest, 'gitignore'), join(dest, '.gitignore'));
            renameSync(join(dest, 'eslintrc'), join(dest, '.eslintrc'));
            // if (true) {
            //     info('run', 'npm install');
            //     require('./install')(printSuccess);
            // } else {
                printSuccess();
            // }
        })
        .resume();

    function printSuccess() {
        success(`
Success! Created ${projectName} at ${dest}.

Inside that directory, you can run several commands:
  * npm start: Starts the development server.
  * npm run build: Bundles the app into dist for production.
  * npm test: Run test.

We suggest that you begin by typing:
  cd ${dest}
  npm start

Happy hacking!`);
    }
}

function template(dest, cwd) {
    return through.obj(function (file, enc, cb) {
        if (!file.stat.isFile()) {
            return cb();
        }

        info('create', file.path.replace(cwd + '/', ''));
        this.push(file);
        cb();
    });
}
