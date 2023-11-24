"use strict"

const express = require("express")
let router = express.Router()

router
    .route("/")
    .get((req, res) => {
        console.log("Teacher Entered 1")
        res.send("Teacher entered")

    })

router
    .route("/speak")
    .get((req,res) => {
        res.send("Native Speaker Speak ")
    })


module.exports = router


