const { Client } = require('pg');
const port = 6543;

const connection = new Client({
   host: 'localhost',
   port: port,
   user: 'postgres',
   password: 'supersecretpassword',
   database: 'app',
});

connection.connect(function (err) {
   if (err) throw err;
   console.log('Connected');
});

module.exports = connection;
