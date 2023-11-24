const express = require("express")
let router = express.Router()

// TODO: GETS are tested but others are not. Test put and post

// For getting profile infor
router
    .route("/info")
    .get((req, res) =>{
        res.send("Profile Info Work")
    })

router
    .route("/updateInfo")
    .put((req, res) => {
        console.log("Update Info")
    })

// For getting users languages and their level
router
    .route("/myLanguages")
    .get((req, res) => {
        res.send("My Languages Work")
    })


// Adding new Language For The User
router
    .route("/addNewLanguage")
    .post((req, res) => {
        console.log(req.body)
    })

// Updating Language For The User
router
    .route("/updateLanguage")
    .put((req, res) => {
        console.log("Updating Language")
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

module.exports = router