const connect = require('./client');
console.log('Connecting ...');
connect();

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
}

setupInput();

function handleUserInput(c) {
  const dataHex = Buffer.from(c, 'ascii').toString('hex');
  const ctrlCHex = '03';

  if (dataHex === ctrlCHex) {
    process.exit();
  }
}