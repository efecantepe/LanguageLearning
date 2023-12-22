const { executeQuery } = require('./db');

async function addNewLearner(learnerId, username, learnerName, surname, gender, email, password) {
   const query = `
      INSERT INTO Learner (learnerId, username, learnerName, surname, gender, email, "password")
      VALUES ('${learnerId}', '${username}', '${learnerName}', '${surname}', '${gender}', '${email}', '${password}');
   `;

   return executeQuery(query);
}

async function updateLearnerDetails(learnerId, updatedDetails) {
   const updateClauses = Object.entries(updatedDetails)
      .map(([key, value]) => `${key} = '${value}'`)
      .join(', ');

   const query = `
      UPDATE Learner
      SET ${updateClauses}
      WHERE learnerId = '${learnerId}';
   `;

   return executeQuery(query);
}

async function getLearnerDetails(learnerId) {
   const query = `
      SELECT * FROM Learner
      WHERE learnerId = '${learnerId}';
   `;

   return executeQuery(query);
}

async function enrollInClass(learnerId, classId) {
   const query = `
      INSERT INTO class (classId, learnerId, classStatus)
      VALUES ('${classId}', '${learnerId}', 'pending');
   `;

   return executeQuery(query);
}

async function searchTeachers() {
   const query = `
   SELECT * FROM teacher
   WHERE teacherName LIKE $1; 
   `
}

async function sortUsers() { 
   const query = `
    SELECT
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
        u.userName;
`};


module.exports = {
   addNewLearner,
   updateLearnerDetails,
   getLearnerDetails,
   enrollInClass,
   searchTeachers,
   sortUsers,
};
