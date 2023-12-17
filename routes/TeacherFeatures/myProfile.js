const express = require("express")
let router = express.Router()
const connection = require("../../db/db")

// TODO: GETS are tested but others are not. Test put and post

// For getting profile infor
router
    .route("/info")
    .get((req, res) =>{
        res.send("Teacher Profile Info Work")
    })

router
    .route("/updateInfo")
    .put((req, res) => {

        let user = req.body

        console.log(user)

        let sqlQuery = `UPDATE teacher SET teachername = ($1), surname = ($2), gender = ($3), email = ($4) WHERE teacherid = ($5)`
        values = [user.name, user.surname, user.gender, user.email, user.teacherId,]

        try{
            let respond = connection.query(sqlQuery, values)
            
            respond.then((result) => {

                try{
                    console.log(result)
                    res.send(200)
                }catch(e){
                    console.log(e)
                }
                
            })

        }catch(e){
            console.log(e)
        }    
    })

// For getting users languages and their level
router
    .route("/myLanguages")
    .get((req, res) => {

        let user = req.query

        console.log(user)

        let sqlQuery = `SELECT * FROM learnerLanguages WHERE learnerId = ($1)`
        let values = [user.learnerId,]
        let respond = connection.query(sqlQuery, values)

        // Respond is a promise
        respond.then((response) => {
            res.send(response.rows)
        })
    })


// Adding new Language For The User
router
    .route("/addNewLanguage")
    .post((req, res) => {
        
        let language = req.body

        let sqlQuery = `Insert INTO teacherLanguages Values ($1,$2,$3)`
        let values = [language.languageName, language.teacherid, language.level]

        let respond = connection.query(sqlQuery, values)
        
        // TODO : when the values are wrong. Code crashes, DO ERROR HANDLING
        // TODO : update database schema make sure there will be no duplicates
        res.send(200)
    })

// Updating Language For The User
router
    .route("/updateLanguage")
    .put((req, res) => {
        
        console.log("AKJSHDAKSD");
        let language = req.query;
        console.log(language);

        let sqlQuery = `UPDATE learnerLanguages SET level = ($1) WHERE learnerId = ($2) AND languageName = ($3)`;
        let values = [language.level, language.learnerId, language.languageName];

        connection.query(sqlQuery, values, (error, respond) => {
            if (error) {
                console.error(error);
                res.sendStatus(500);
            } else {
                console.log(respond);
                res.sendStatus(200);
            }
         });
        
    })


// Getting The Profile Photo For the user
router
    .route("/getProfilePhoto")
    .get((req, res) => {
        res.send("Profile Photo Works.. Optional.. Do as Last Task")
    })

// Add and update the profile photo

router
    .route("/addProfilePhoto")
    .post((req, res) => {
        console.log(" Adding the profile photo.. Optional")
    })
    .put((req, res) => {

        console.log(" Updating the profile photo.. Optional")

    })

router
    .route("/targetLanguages")
    .get((req, res) => {

        let user = req.query

        console.log(user)

        let sqlQuery = `SELECT * FROM targetLanguages WHERE learnerId = ($1)`
        let values = [user.learnerId,]
        let respond = connection.query(sqlQuery, values)

        // Respond is a promise
        respond.then((response) => {
            res.send(response.rows)
        })

    })

router
    .route("/addTargetLanguage")
    .post((req, res) => {
        let language = req.body

        console.log(language.targetLevel)


        let sqlQuery = `Insert INTO targetLanguages Values ($1,$2,$3)`
        let values = [language.languageName, language.learnerId, language.targetLevel]

        let respond = connection.query(sqlQuery, values)
        
        // TODO Make sure targetLevel always higher then the known language

        res.send(200)

    })

    router
    .route("/updateTargetLanguage")
    .put((req, res) => {
        
        let language = req.query;
        //console.log(language);

        let sqlQuery = `UPDATE targetLanguages SET targetLevel = ($1) WHERE learnerId = ($2) AND languageName = ($3)`;
        let values = [language.targetLevel, language.learnerId, language.languageName];

        connection.query(sqlQuery, values, (error, respond) => {
            if (error) {
                console.error(error);
                res.sendStatus(500);
            } else {
                console.log(respond);
                res.sendStatus(200);
            }
         });
        
    })



module.exports = router