const { executeQuery } = require('../db');

async function systemReport(language, level) {
   const query = `
      SELECT
         COUNT(DISTINCT learnerId) AS totalStudents,
         AVG(h.grade) AS homeworkGradeAverage,
         AVG(se.grade) AS speakingExerciseGradeAverage
      FROM class c
      LEFT JOIN homeworksInClass h ON c.classId = h.classId
      LEFT JOIN speakingExercise se ON c.classId = se.classId
      WHERE c.languageName = '${language}' AND c.classLevel = '${level}';
   `;

   return executeQuery(query);
}

module.exports = {
   systemReport,
};