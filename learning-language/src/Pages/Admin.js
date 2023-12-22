import React, { useState } from 'react';
import {
  Typography,
  FormControl,
  MenuItem,
  InputLabel,
  Select,
  Container,
  Button,
  Grid,
  Paper,
} from '@mui/material';
import axios from 'axios';
import Header from '../Components/Header';

const AdminPage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [languages, setLanguages] = useState([]);
  const [levels, setLevels] = useState([]);

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const handleLevelChange = (event) => {
    setSelectedLevel(event.target.value);
  };
  const [studentsCount, setStudentsCount] = useState(0);
  const [gradeAverage, setGradeAverage] = useState(0);
  const [speakingGradeAverage, setSpeakingGradeAverage] = useState(0);

  const handleGenerateReport = () => {
    //fetchStudentsCount();
    //fetchGradeAverage();
  };

  return (
    <div className='main'>
      <Container maxWidth="lg">
        <Header />
        <Grid
          container
          justifyContent="center"
          style={{ minHeight: '80vh' }}
        >
          <Grid item xs={12} sm={6}>
            <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
              <Typography variant="h4" gutterBottom align="center">
                Generate System Report
              </Typography>
              <FormControl fullWidth className='margin-top-1'>
                <InputLabel>Language</InputLabel>
                <Select
                  value={selectedLanguage}
                  onChange={handleLanguageChange}
                  label="Language"
                >
                  {languages.map((data, index) => (
                    <MenuItem key={index} value={data.languagename}>
                      {data.languagename}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl fullWidth className='margin-top-1'>
                <InputLabel>Level</InputLabel>
                <Select
                  value={selectedLevel}
                  onChange={handleLevelChange}
                  label="Level"
                >
                  {levels.map((data, index) => (
                    <MenuItem key={index} value={data.level}>
                      {data.level}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <div style={{ textAlign: 'center' }}>
                <Button variant="contained" onClick={handleGenerateReport} className='margin-top-1'>
                  Generate Report
                </Button>
              </div>
              <hr/>
              <Typography variant="h5" gutterBottom align="center" className='margin-top-1'>
                Report
              </Typography>
              <Typography variant="body1" align="center">
                Students learning this language: {studentsCount}
              </Typography>
              <Typography variant="body1" align="center">
                Grade average in homeworks/exams: {gradeAverage}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <footer
        style={{ display: 'flex', justifyContent: 'center', marginTop: 10 }}
      >
        <Typography variant="body2" color="textSecondary">
          &copy; 2023 Online Language Learning Platform
        </Typography>
      </footer>
    </div>
  );
};

export default AdminPage;
