
const {Client} = require('pg')
const port = 6543
const connection = new Client({

    host: 'localhost',
    port: port,
    user: "postgres",
    password: "supersecretpassword",
    database: "app"

})

connection.connect(function(err) {
    if(err) throw err;
    console.log("Connected")
})

async function executeQuery(query) {
    try {
        const result = await connection.query(query);
        return result.rows;
    } catch (error) {
        throw new Error(`Error executing query: ${error.message}`);
    }
}

module.exports = {
    connection,
    executeQuery,
};