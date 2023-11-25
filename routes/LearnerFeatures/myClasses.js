const express = require("express")
let router = express.Router()

router
    .route("/addRequest")
    .get((req, res) =>{

        res.send("my calssjakhdas ")


    })

module.exports = router