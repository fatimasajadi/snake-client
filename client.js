const net = require('net');
const { IP, PORT } = require('./constants');

// Establishes connection with the game server
const connect = function() {
  const conn = net.createConnection({
    IP,
    PORT
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write('Name: FS', () => {});
    conn.write('Say: H', () => {});
  });
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  return conn;
}
module.exports = connect;