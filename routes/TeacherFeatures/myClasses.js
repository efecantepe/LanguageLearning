const express = require("express")
let router = express.Router()
const connection = require("../../db/db")


router
    .route("/addClass")
    .post((req, res) =>{
        
        const {language, minLevel, maxLevel, learnerid, teacherid, date} = req.body

        let sqlQuery = `INSERT INTO class (languageName, learnerid, teacherid, classlevel, classDate) 
                                    VALUES (($1), ($2), ($3), ($4), ($5))`

        let values = [language, learnerid, teacherid, maxLevel, date]

        console.log(values)

        

        try{

            let response = connection.query(sqlQuery, values)
            
            response.then((e) => {

                try{
                    console.log(e)
                }

                catch(e){
                    console.log(e)
                }
            })

        }catch(e){
            console.log(e)
        }


    })

// show old classes for the learner
router
    .route("/getWaitingClasses")
    .get((req, res) =>{

        let teacherid = req.query.teacherid

        let sqlQuery = `Select learner.learnername,  waitingClasses.* FROM waitingClasses, learner WHERE teacherid = ($1) AND learner.learnerid = waitingClasses.learnerid`
        let values = [teacherid,]

        let response = connection.query(sqlQuery, values)

        response.then((result) => {

        
            console.log(result.rows)

            if(result.rowCount === 0){
                res.send(result.rows)
            }

            else{
                res.send(result.rows)
            }  
        })
    })

// show present classes for the learner
router
    .route("/getActiveClasses")
    .get((req, res) =>{
        let teacherid = req.query.teacherid

        console.log("Teacher id !!!!!!", teacherid)

        let sqlQuery = `Select learner.learnername, activeClasses.* FROM activeClasses, learner WHERE teacherid = ($1) AND learner.learnerid = activeClasses.learnerid`
        let values = [teacherid,]

        let response = connection.query(sqlQuery, values)

        response.then((result) => {

            
            console.log("Active Table !!!!!!!", result.rows)

            if(result.rowCount === 0){
                res.send(result.rows)
            }

            else{
                res.send(result.rows)
            }  
        })
    })

router
    .route("/getRejectedClasses")
    .get((req, res) =>{
        let teacherid = req.query.teacherid

        let sqlQuery = `Select learner.learnername,  rejectedClasses.* FROM rejectedClasses, learner WHERE teacherid = ($1) AND learner.learnerid = rejectedClasses.learnerid`
        let values = [teacherid,]

        let response = connection.query(sqlQuery, values)

        response.then((result) => {

        
            console.log(result.rows)

            if(result.rowCount === 0){
                res.send(result.rows)
            }

            else{
                res.send(result.rows)
            }  
        })
    })


router
    .route("/getFinishedClasses")
    .get((req, res) =>{
        let teacherid = req.query.teacherid

        let sqlQuery = `Select learner.learnername,  finishedClasses.* FROM finishedClasses, learner WHERE teacherid = ($1) AND learner.learnerid = finishedClasses.learnerid`
        let values = [teacherid,]

        let response = connection.query(sqlQuery, values)

        response.then((result) => {

        
            console.log(result.rows)

            if(result.rowCount === 0){
                res.send(result.rows)
            }

            else{
                res.send(result.rows)
            }  
        })
    })


router
    .route("/accept")
    .post((req, res) => {
        console.log(req.body.classid)

        let values = [req.body.classid,]
        let sqlQuery = "UPDATE class SET classstatus = 'active' WHERE classid = ($1) "

        let result = connection.query(sqlQuery, values)

        result.then((a) => {

            console.log(a)

            try{
                res.send(200)
            }catch(e){
                res.send(400)
            }

        })
    })

router
    .route("/reject")
    .post((req, res) => {
        console.log(req.body.classid)

        let values = [req.body.classid,]
        let sqlQuery = "Delete from class WHERE classid = ($1) "

        let result = connection.query(sqlQuery, values)

        result.then((a) => {

            console.log(a)

            try{
                res.send(200)
            }catch(e){
                res.send(400)
            }

        })
    })


// show class detail
router
    .route("/classDetail")
    .get((req, res) =>{
        res.send("showing class detail")
    })

// send new class request
router.post('/sendClassRequest', async (req, res) => {
    const { learnerId, teacherId, classId } = req.body;
 
    try {
       await learnerQueries.sendClassRequest(learnerId, teacherId, classId);
       res.status(200).json({ message: 'Class request sent successfully.' });
    } catch (error) {
       console.error('Error sending class request:', error.message);
       res.status(500).json({ error: 'Internal server error' });
    }
 });

 router.post('/addHomework',  (req, res) => {

    let sqlQuery = 'INSERT INTO homeworksinclass VALUES ( ($1) , ($2), ($3), ($4))'
    let values = [req.body.classid, req.body.teacherid, req.body.learnerid, req.body.homeworksdescription] 

    console.log(values)

    let result = connection.query(sqlQuery, values)

    res.send(200)

 })

 router.post("/deleteHomework", (req, res) => {

    let sqlQuery = 'Delete FROM homeworksinclass WHERE classid = ($1)'
    let values = [req.body.classid,] 

    console.log(values)

    let result = connection.query(sqlQuery, values)

    res.send(200)

 })

 router.get("/getHomework", (req, res) => {

    let obj = {

        classid : req.query.id

    }

    let sqlQuery = "Select homeworkdescription FROM homeworksinclass WHERE classid = ($1)"
    let values = [req.query.id]

    connection.query(sqlQuery, values).then((result) => {
        res.send(result.rows)
    })


 })

 router
 .route("/waitingHomeworks")
 .get((req, res) => {

     let values = [req.query.id]

     let sqlQuery = `Select * From waitinghomework WHERE teacherid = ($1)`


     connection.query(sqlQuery, values).then((result) => {

         res.send(result)

     })

})

router
    .route("/updatePoint")
    .post((req, res) => {

        let values = [req.body.homeworkid, req.body.point]
        let sqlQuery = "Update homeworksinclass SET point = ($2) WHERE homework_id = ($1)"
        connection.query(sqlQuery, values)
    })

router
    .route("/finishedHomeworks")
    .get((req, res) => {
   
        let values = [req.query.id]
   
        let sqlQuery = `Select * From finishedhomework WHERE teacherid = ($1)`
   
   
        connection.query(sqlQuery, values).then((result) => {
   
            res.send(result)
   
        })
   
   })

module.exports = router 