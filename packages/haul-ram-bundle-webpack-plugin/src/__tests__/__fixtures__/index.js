import helloCjs from './hello.cjs';
import helloEsm from './hello.esm';

function main() {
  if (helloCjs() !== 'hello world') throw new Error('helloCjs failed');
  else if (helloEsm() !== 'hello world') {
    throw new Error('helloEsm failed');
  }

  global.done = true;
}

main();
