"use strict"

const express = require("express")
const myProfile = require("./TeacherFeatures/myProfile")
const myClasses = require("./TeacherFeatures/myClasses")
let router = express.Router()

router.use("/myProfile", myProfile)
router.use("/myClasses", myClasses)

router
    .route("/")
    .get((req, res) => {
        console.log("Teacher Entered 1")
        res.send("Teacher entered")

    })

router
    .route("/speak")
    .get((req,res) => {
        res.send("Teacher Speak ")
    })


module.exports = router


