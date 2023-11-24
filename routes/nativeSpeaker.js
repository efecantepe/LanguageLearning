"use strict"

const express = require("express")
let router = express.Router()

router
    .route("/")
    .get((req, res) => {

        console.log("Native Speaker Entered 1")
        res.send("Native Speaker entered")

    })

router
    .route("/speak")
    .get((req,res) => {
        res.send("Native Speaker Speak ")
    })


module.exports = router


