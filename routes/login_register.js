"use strict"

const express = require("express")
const crypto = require('crypto')
const connection = require('../db/db')

let router = express.Router()

router
    .route("/register")
    .get((req, res) => {

        console.log("Login Entered 1")
        res.send("Login")

    })

router
    .route("/register")
    .post((req, res) =>{

        console.log("ASD")

        let user = req.body

        if(user.user_type === "learner"){
            registerLearner(user);
        }

        else if(user.user_type === "teacher"){

            registerTeacher(user);

            console.log("JKSAHD")            

        }

        else if(user.user_type === "nativeSpeaker"){
            
        }

        console.log(user)
        res.sendStatus(200)
    })

router
    .route("/login")
    .get((req, res) => {
        login(req.query).then( (respond) => {

            if(respond === -1){
                res.send("Something went wrong")
            }

            res.send(respond)
        })
    })


async function registerLearner(user){
    let learnerId = createHashedId()
    let query = `Insert Into learner (learnerId, username, learnerName, surname, gender, email, password) VALUES
                                     ($1, $2, $3, $4, $5, $6, $7) `

    let values = [learnerId, user.username, user.name, user.surname, user.gender, user.email, user.password]


    try{
        const respond = await connection.query(query, values)
        console.log(respond)
    
    }catch(e){
        console.log("Error is: ", e)
    }
    

}

async function registerTeacher(user){
    let teacherId = createHashedId()
    let query = `Insert Into teacher (teacherId, username, teacherName, surname, gender, email, password) VALUES
                                     ($1, $2, $3, $4, $5, $6, $7) `

    let values = [teacherId, user.username, user.name, user.surname, user.gender, user.email, user.password]


    try{
        const respond = await connection.query(query, values)
        console.log(respond)
    
    }catch(e){
        console.log("Error is: ", e)
    }
}

async function registerNativeSpeaker(user){

}

function createHashedId(){
    const unixTime = Math.floor(Date.now() / 1000).toString(); // Get current Unix time in seconds
    const hash = crypto.createHash('sha256').update(unixTime).digest('hex');
  
    // Trim the hash to the first 50 characters
    const uniqueHash = hash.slice(0, 20);
  
    return uniqueHash;
}

module.exports = router

async function login(user){

    console.log(user)

    try{
    
    let sqlQuery = `SELECT * FROM ${user.user_type} WHERE username = ($1) AND "password" = ($2)`
    let values = [user.username, user.password]

    let respond = await connection.query(sqlQuery, values)

    console.log(respond.rows)

    return respond.rows

    }
    catch(e){
        return -1
    }

}
