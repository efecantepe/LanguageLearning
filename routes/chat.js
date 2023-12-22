"use strict"

const express = require("express")
const crypto = require('crypto')
const connection = require('../db/db')


let router = express.Router()

router
    .route("/test")
    .get((req, res) => {
        res.send("Works")
    })


router
    .route("/createInbox")
    .post((req, res) => {

        let user1 = req.body.user1
        let user2 = req.body.user2

        let inboxid = createInboxId()

        let inboxQuery = `Insert Into inbox (inbox_id) Values ($1)`
        let inboxValues = [inboxid,]

        console.log(inboxQuery)

        let result = connection.query(inboxQuery, inboxValues)

        result.then((result) => {
            
            let participantQuery = `Insert INTO inbox_participants VALUES
                                                    (($2), ($1)),
                                                    (($3), ($1))`

            let participantsValues = [inboxid, user1, user2]

            console.log(participantsValues)

            let inboxResult = connection.query(participantQuery, participantsValues)

            inboxResult.then((result) => {

                res.send(200)

            })

        })       
    })
    
router
    .route("/myInboxes")
    .get((req, res) => {

        let myId = req.query.id

        let values = [myId,]
        let sqlQuery = `Select * FROM inbox , inbox_participants WHERE inbox.inbox_id = inbox_participants.inbox_id AND inbox_participants.user_id = ($1)`

        let result = connection.query(sqlQuery, values)

        result.then((a) => {


            res.send(a.rows)
        })

    })

router
    .route("/getAllMessages")
    .get((req, res) => {

        let inbox_id = req.query.inbox_id

        console.log(inbox_id)

        let values = [inbox_id,]

        let sqlQuery = `Select * FROM messages WHERE inbox_id = ($1)`

        let result = connection.query(sqlQuery, values)

        result.then((a) => {
            res.send(a.rows)
        })
    })

router
    .route("/sendMessage")
    .post((req, res) => {

        let inbox_id = req.body.inbox_id
        let user_id = req.body.user_id
        let message = req.body.message


        let sqlQuery = `INSERT INTO messages VALUES (($1), ($2), ($3))`
        let values = [inbox_id, user_id, message]

        connection.query(sqlQuery, values)
        res.send(200)
    })


    router
    .route("/getPeople")
    .get((req, res) => {

        let minLevel = req.query.minLevel
        let maxLevel = req.query.maxLevel
        let languageName = req.query.languageName

        console.log(minLevel , "   ", maxLevel, "    ", languageName)

        let sqlQuery = `WITH CombinedUser AS (
                        SELECT Teacher.*, 'teacher' as user_type FROM Teacher
                    
                        UNION
                    
                        SELECT * , 'learner ' FROM Learner
                     ) ,CombinedLanguagase AS (
                        SELECT * FROM teacherlanguages
                    
                        UNION
                    
                        SELECT *  FROM learnerlanguages
                     )
                      SELECT CombinedLanguagase.teacherid , CombinedUser.teacherName, CombinedUser.surname, CombinedUser.user_type FROM CombinedUser , CombinedLanguagase, Level a, Level b, Level c
                                        WHERE CombinedLanguagase.languageName = ($1)
                                            AND CombinedLanguagase.level = a.level
                                            AND b.level = ($2) AND c.level = ($3)
                                            AND a.rank >= b.rank AND a.rank <= c.rank
                                            AND CombinedUser.teacherId = CombinedLanguagase.teacherid;`
        
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

function createInboxId(){
    const unixTime = Math.floor(Date.now() / 1000).toString(); // Get current Unix time in seconds
    const hash = crypto.createHash('sha256').update(unixTime).digest('hex');
    
    // Trim the hash to the first 50 characters
    const uniqueHash = hash.slice(0, 8);
    
    return uniqueHash;
}

module.exports = router