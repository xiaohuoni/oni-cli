import yParser from 'yargs-parser';
import generate from '../generate';

const argv = yParser(process.argv.slice(2));
const [type, file,pagename] = argv._;

generate({
  type,
  file,
  pagename,
  useClass: argv.c || argv.class || false,
  isDirectory: argv.d || argv.directory || false,
});
