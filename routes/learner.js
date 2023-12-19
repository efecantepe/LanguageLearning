"use strict"


const express = require("express")

const requests = require("./LearnerFeatures/requests")
const myProfile = require("./LearnerFeatures/myProfile")
const myClasses = require("./LearnerFeatures/myClasses")
const dashboard = require("./LearnerFeatures/dashboard")


let router = express.Router()

router.use("/myProfile", myProfile)
router.use("/requests", requests)
router.use("/myClasses", myClasses)
router.use("/dashboard", dashboard)



router
    .route("/")
    .get((req, res) =>{

        res.send("Learner Works", 200)

    })


router
    .route("/requests")
    .get((req, res) => {

        console.log("Learner Requests")
        res.send("Learner Requests")

    })

router
    .route("/speak")
    .get((req,res) => {
        res.send("Native Speaker Speak ")
    })


module.exports = router


