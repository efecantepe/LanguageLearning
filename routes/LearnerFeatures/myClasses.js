const express = require("express")
let router = express.Router()

router
    .route("/addRequest")
    .post((req, res) =>{
        console.log(req.body)
        console.log("myClasses-learner add request successful")
    })

// show old classes for the learner
router
    .route("/showOldClasses")
    .get((req, res) =>{
        res.send("showing old classes")
    })

// show present classes for the learner
router
    .route("/showNewClasses")
    .get((req, res) =>{
        res.send("showing new classes")
    })

// show class detail
router
    .route("/classDetail")
    .get((req, res) =>{
        res.send("showing class detail")
    })

// send new class request
router
    .route("/newClassRequest")
    .post((req, res) => {
        console.log(req.body)
    })


module.exports = router 