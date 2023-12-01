"use strict"

const express = require("express")
const crypto = require('crypto')
const connection = require('./../db')
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

        let user = req.body

        if(user.user_type = "learner"){
            registerLearner(user);
        }

        else if(user.user_type = "teacher"){
            
        }

        else if(user.user_type = "nativeSpeaker"){
            
        }


        console.log(user)


        res.sendStatus(200)

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


