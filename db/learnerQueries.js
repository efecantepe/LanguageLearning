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

module.exports = {
   addNewLearner,
   updateLearnerDetails,
   getLearnerDetails,
   enrollInClass,
};
