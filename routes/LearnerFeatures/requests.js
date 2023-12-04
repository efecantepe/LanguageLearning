const express = require("express")
let router = express.Router()
const connection = require("./../../db")

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
        let sqlQuery = `Select * FROM language`
        let respond = connection.query(sqlQuery)

        respond.then((response) => {
            res.send(response.rows)
        })
    })

router
    .route("/getLevels")
    .get((req, res) => {
        
        let sqlQuery = `Select * FROM level`
        let respond = connection.query(sqlQuery)

        respond.then((response) => {
            res.send(response.rows)
        })

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