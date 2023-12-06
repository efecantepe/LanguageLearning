const { executeQuery } = require('./db');

async function getClassRequests(teacherId) {
   const query = `
      SELECT * FROM class
      WHERE teacherId = '${teacherId}' AND classStatus = 'pending';
   `;

   return executeQuery(query);
}

async function acceptClassRequest(classId) {
   const query = `
      UPDATE class
      SET classStatus = 'accepted'
      WHERE classId = '${classId}';
   `;

   return executeQuery(query);
}

async function rejectClassRequest(classId) {
   const query = `
      UPDATE class
      SET classStatus = 'rejected'
      WHERE classId = '${classId}';
   `;

   return executeQuery(query);
}

async function assignHomeworkToClass(classId, homeworkDescription, dueDate) {
   const query = `
      INSERT INTO homeworksInClass (classId, homeworkDescription, dueDate)
      VALUES ('${classId}', '${homeworkDescription}', '${dueDate}');
   `;

   return executeQuery(query);
}

module.exports = {
   getClassRequests,
   acceptClassRequest,
   rejectClassRequest,
   assignHomeworkToClass,
};