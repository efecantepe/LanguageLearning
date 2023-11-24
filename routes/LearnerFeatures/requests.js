const express = require("express")
let router = express.Router()

// For sending request to the teacher
router
    .route("/addRequest")
    .post((req, res) =>{
        console.log(req.body)
        console.log("reqeusts learner ")
    })

router
    .route("/getLanguages")
    .get((req, res) =>{
        res.send("Get Languages Work")
    })

router
    .route("/getLevels")
    .get((req, res) => {
        res.send("Get Levels Work")
    })

router
    .route("/getClasses")
    .get((req, res) => {

        res.send("Get Classes Work")

    })
    
router
    .route("/getRejectedClasses")
    .get((req, res) => {
        res.send("Get Rejected Classes Work")
    })
    
module.exports = router