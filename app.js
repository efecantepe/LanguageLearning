"use strict"
const express = require('express')
const app = express()
const router = express.Router()
const nativeSpeaker = require("./routes/nativeSpeaker")
const learner = require("./routes/learner")
const teacher = require("./routes/teacher")


app.use(express.json())


const port = 3000

app.use("/nativeSpeaker", nativeSpeaker)
app.use("/learner", learner)
app.use("/teacher", teacher)

app.get('/', (req, res) => {
    res.send('Hello World')
})


/* 
    Program Starts
*/
app.listen(port, () => {
    console.log("App started listening port ", port)
})