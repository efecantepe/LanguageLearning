import React, { useState } from 'react';
import { TextField, Button, Typography, Container } from '@mui/material';
import axios from 'axios';

const AdminPage = () => {
  const [language, setLanguage] = useState('');
  const [level, setLevel] = useState('');
  const [studentsCount, setStudentsCount] = useState(0);
  const [gradeAverage, setGradeAverage] = useState(0);
  const [speakingGradeAverage, setSpeakingGradeAverage] = useState(0);


  const handleGenerateReport = () => {
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Generate System Report
      </Typography>
      <TextField
        label="Language"
        variant="outlined"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Level"
        variant="outlined"
        value={level}
        onChange={(e) => setLevel(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" onClick={handleGenerateReport}>
        Generate Report
      </Button>

      <div style={{ marginTop: '20px' }}>
        <Typography variant="h5" gutterBottom>
          Report
        </Typography>
        <Typography variant="body1">
          Students learning this language: {studentsCount}
        </Typography>
        <Typography variant="body1">
          Grade average in homeworks/exams: {gradeAverage}
        </Typography>
        <Typography variant="body1">
          Grade average in speaking exercises: {speakingGradeAverage}
        </Typography>
      </div>
    </Container>
  );
};

export default AdminPage;
