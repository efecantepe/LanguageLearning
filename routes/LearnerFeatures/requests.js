const express = require("express")
let router = express.Router()
const connection = require("./../../db/db")

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
    .route("/getTeachers")
    .get((req, res) => {

        let minLevel = req.query.minLevel
        let maxLevel = req.query.maxLevel
        let languageName = req.query.languageName

        console.log(minLevel , "   ", maxLevel, "    ", languageName)

        let sqlQuery = `SELECT teacherLanguages.teacherid ,teacherName, surname FROM teacher_name_surname ,teacherLanguages, Level a, Level b, Level c
                                WHERE teacherLanguages.languageName = ($1)
                                    AND teacherLanguages.level = a.level
                                    AND b.level = ($2) AND c.level = ($3)
                                    AND a.rank >= b.rank AND a.rank <= c.rank
                                    AND teacher_name_surname.teacherId = teacherLanguages.teacherid;`
        
        let values = [languageName, minLevel, maxLevel,]

        console.log(values)

        try{

            let respond = connection.query(sqlQuery, values)

            respond.then((result) => {

                console.log(result.rows)

                res.send(result.rows)
            })

        }catch(e){

            console.log(e)

        }

        

    

    })

router
    .route("/getLevels")
    .get((req, res) => {
        
        let sqlQuery = `Select * FROM level Order BY rank`
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