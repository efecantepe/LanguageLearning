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

            let inboxResult = connection.query(participantQuery, participantsValues)

            inboxResult.then((result) => {

                res.send(200)

            })

        })       
    })
    
router
    .route("/myInboxes")
    .get((req, res) => {

        let myId = req.query.userid

        let values = [myId,]
        let sqlQuery = `Select * FROM inbox JOIN inbox_participants ON inbox.inbox_id = inbox_participants.inbox_id WHERE inbox_participants.user_id = ($1)`

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


function createInboxId(){
    const unixTime = Math.floor(Date.now() / 1000).toString(); // Get current Unix time in seconds
    const hash = crypto.createHash('sha256').update(unixTime).digest('hex');
    
    // Trim the hash to the first 50 characters
    const uniqueHash = hash.slice(0, 8);
    
    return uniqueHash;
}

module.exports = router