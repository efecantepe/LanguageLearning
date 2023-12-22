"use strict"
const express = require('express')
const app = express()
const router = express.Router()
const nativeSpeaker = require("./routes/nativeSpeaker")
const learner = require("./routes/learner")
const teacher = require("./routes/teacher")
const login_register = require("./routes/login_register")
const chat = require("./routes/chat")

const connection = require("./db/db")

var cors = require('cors');
app.use(cors());

const port = 3000

app.use(express.json())

app.use("/nativeSpeaker", nativeSpeaker)
app.use("/learner", learner)
app.use("/teacher", teacher)
app.use("/chat", chat)
app.use("", login_register )



app.get('/', (req, res) => {
    res.send('Hello World')
})

async function doWork(){

    const res = await connection.query('Select * from language')
    console.log(res.rows)

    console.log(res)

}

app.get('/classesInRange', async (req, res) => {
    try {
        const { startDate, endDate } = req.query;
        const classes = await pool.query(
            "SELECT * FROM class WHERE classDate BETWEEN $1 AND $2",
            [startDate, endDate]
        );
        res.json(classes.rows);
    } catch (err) {
        console.error(err.message);
    }
});

app.get('/searchTeachers', async (req, res) => {
    try {
        const { name } = req.query;
        const teachers = await pool.query(
            "SELECT * FROM teacher WHERE teacherName LIKE $1",
            [`%${name}%`]
        );
        res.json(teachers.rows);
    } catch (err) {
        console.error(err.message);
    }
});

app.get('/sortedUsers', async (req, res) => {
    try {
        const { languageName, minLevel, maxLevel } = req.query;
        const users = await pool.query(
            `SELECT
                u.userName,
                u.userType,
                ul.languageName,
                ul.level
             FROM (
                SELECT
                    learnerName AS userName,
                    'Learner' AS userType,
                    learnerId
                FROM
                    Learner
                UNION
                SELECT
                    teacherName AS userName,
                    'Teacher' AS userType,
                    teacherId
                FROM
                    Teacher
             ) AS u
             JOIN (
                SELECT
                    languageName,
                    learnerId AS userId,
                    level
                FROM
                    learnerLanguages
                UNION
                SELECT
                    languageName,
                    teacherid AS userId,
                    level
                FROM
                    teacherLanguages
             ) AS ul ON u.learnerId = ul.userId
             WHERE
                ul.languageName = $1
                AND ul.level BETWEEN $2 AND $3
             ORDER BY
                ul.level DESC,
                u.userName`,
            [languageName, minLevel, maxLevel]
        );
        res.json(users.rows);
    } catch (err) {
        console.error(err.message);
    }
});

app.get("/admin", (req, res) => {

    let language = req.params.language
    let level = req.params.level

    let values = [language, level]

    let query = `
    SELECT
       COUNT(DISTINCT c.learnerId) AS totalStudents,
       AVG(h.grade) AS homeworkGradeAverage
    FROM class c
    LEFT JOIN homeworksInClass h ON c.classId = h.classId
    WHERE c.languageName = ($1) AND c.classLevel = ($2);
 `;

 connection.query(query, values).then((result) => {

    result.send(result)

 })

})
//doWork()

/* 
    Program Starts
*/
app.listen(port, () => {
    console.log("App started listening port ", port)
})