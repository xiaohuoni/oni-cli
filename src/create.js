import assert from 'assert';
import install from './utils/install';

export default function(opts = {}) {
  const { name, isMobileApp } = opts;
  const gitUrl = isMobileApp?'https://github.com/xiaohuoni/dva-umi-mobile':'https://github.com/xiaohuoni/dva-umi';
  assert(name, 'opts.name should be supplied');
  assert(typeof name === 'string', 'opts.name should be string');
  install('git',['clone',gitUrl,name],()=>{
      console.log('create end');
  })
}
