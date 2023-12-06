const { executeQuery } = require('./db');

async function getSpeakingExerciseRequests(nativeSpeakerId) {
   const query = `
      SELECT * FROM speakingExercise
      WHERE nativeSpeakerId = '${nativeSpeakerId}' AND requestStatus = 'pending';
   `;

   return executeQuery(query);
}

async function acceptSpeakingExerciseRequest(exerciseId) {
   const query = `
      UPDATE speakingExercise
      SET requestStatus = 'accepted'
      WHERE exerciseId = '${exerciseId}';
   `;

   return executeQuery(query);
}

async function rejectSpeakingExerciseRequest(exerciseId) {
   const query = `
      UPDATE speakingExercise
      SET requestStatus = 'rejected'
      WHERE exerciseId = '${exerciseId}';
   `;

   return executeQuery(query);
}

async function gradeSpeakingExercise(exerciseId, grade) {
   const query = `
      UPDATE speakingExercise
      SET grade = ${grade}
      WHERE exerciseId = '${exerciseId}';
   `;

   return executeQuery(query);
}

module.exports = {
   getSpeakingExerciseRequests,
   acceptSpeakingExerciseRequest,
   rejectSpeakingExerciseRequest,
   gradeSpeakingExercise,
};