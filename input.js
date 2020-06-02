let connection;
const setupInput = function(conn) {
  connection = conn;
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
  const wKey = '57';
  const aKey = '41';
  const sKey = '53';
  const dKey = '44';

  if (dataHex === ctrlCHex) {
    process.exit();
  } else if (dataHex === sKey) {
    connection.write('Move: down');
  } else if (dataHex === aKey) {
    connection.write('Move: left');
  } else if (dataHex === dKey) {
    connection.write('Move: right');
  } else if (dataHex === wKey) {
    connection.write('Move: up');
  }
}

module.exports = setupInput;