const express = require("express")
let router = express.Router()

router
    .route("/addRequest")
    .post((req, res) =>{

        console.log("reqeusts learner ")


    })

module.exports = router