import assert from 'assert';
import page from './generators/page';
import rnpage from './generators/rnpage';
import component from './generators/component';

const generators = {
  page,component,rnpage
};

export default function(opts = {}) {
  const { type, file } = opts;
  assert(type, 'opts.type should be supplied');
  assert(typeof type === 'string', 'opts.file should be string');
  assert(file, 'opts.file should be supplied');
  assert(typeof file === 'string', 'opts.file should be string');
  assert(generators[type], `generator of type (${type}) not found`);

  delete opts.type;
  generators[type](opts);
}
