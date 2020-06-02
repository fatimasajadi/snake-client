const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
}

function handleUserInput(c) {
  const dataHex = Buffer.from(c, 'ascii').toString('hex');
  const ctrlCHex = '03';

  if (dataHex === ctrlCHex) {
    process.exit();
  }
}
module.exports = setupInput;