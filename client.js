const net = require('net');

// let port = 50541;
// let host = '10.0.2.15';
// Establishes connection with the game server

const connect = function() {
  const conn = net.createConnection({
    host: '10.0.2.15',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('connect', () => {
    console.log("Successfully connected to game server");

    conn.write('Name: FSS', () => {
      // setTimeout(() => {
      //   conn.write('Move: up', () => {
      //     setTimeout(() => {
      //       conn.write('Move: left')

      //     }, 400);

      //   });
      // }, 400)
    });


  });
  // conn.on('connect', () => {
  //   conn.write('Name: FSS');

  // });

  // conn.on('data', (data) => {

  //   conn.write(data, 'Move: up');
  // });



  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  return conn;
}
module.exports = connect;