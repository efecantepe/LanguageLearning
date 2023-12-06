"use strict"
const express = require('express')
const app = express()
const router = express.Router()
const nativeSpeaker = require("./routes/nativeSpeaker")
const learner = require("./routes/learner")
const teacher = require("./routes/teacher")
const login_register = require("./routes/login_register")

const connection = require("./db/db")


const port = 3000

app.use(express.json())

app.use("/nativeSpeaker", nativeSpeaker)
app.use("/learner", learner)
app.use("/teacher", teacher)
app.use("", login_register )


app.get('/', (req, res) => {
    res.send('Hello World')
})

async function doWork(){

    const res = await connection.query('Select * from language')
    console.log(res.rows)

    console.log(res)

}

//doWork()

/* 
    Program Starts
*/
app.listen(port, () => {
    console.log("App started listening port ", port)
})