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

        let learnerId = req.query.learnerId

        let sqlQuery = `Select teacher.teachername,  waitingClasses.* FROM waitingClasses, teacher WHERE learnerid = ($1) AND teacher.teacherid = waitingClasses.teacherid`
        let values = [learnerId,]

        let response = connection.query(sqlQuery, values)

        response.then((result) => {

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
        let learnerId = req.query.learnerId

        let sqlQuery = `Select * FROM activeClasses WHERE learnerid = ($1)`
        let values = [learnerId,]

        let response = connection.query(sqlQuery, values)

        response.then((result) => {

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
        let learnerId = req.query.learnerId

        let sqlQuery = `Select * FROM rejectedClasses WHERE learnerid = ($1)`
        let values = [learnerId,]

        let response = connection.query(sqlQuery, values)

        response.then((result) => {

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
        let learnerId = req.query.learnerId

        let sqlQuery = `Select * FROM finishedClasses WHERE learnerid = ($1)`
        let values = [learnerId,]

        let response = connection.query(sqlQuery, values)

        response.then((result) => {

            if(result.rowCount === 0){
                res.send(result.rows)
            }

            else{
                res.send(result.rows)
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


module.exports = router 