const express = require("express")
let router = express.Router()

router
    .route("/addRequest")
    .post((req, res) =>{
        console.log(req.body)
        console.log("myClasses-learner add request successful")
    })

// show old classes for the learner
router
    .route("/showOldClasses")
    .get((req, res) =>{
        res.send("showing old classes")
    })

// show present classes for the learner
router
    .route("/showNewClasses")
    .get((req, res) =>{
        res.send("showing new classes")
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