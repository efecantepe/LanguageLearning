
const mysql= require('mysql')
const port = 3000
const connection = mysql.createConnection({

    host: 'localhost',
    port: port,
    user: "efe",
    password: "password",
    database: "project"

})

connection.connect()

module.exports = connection
