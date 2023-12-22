import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText, Divider,Avatar,Typography, FormControl,MenuItem,Select,InputLabel,Container,Button } from '@mui/material';
import axios from 'axios';
import urllist from '../urllist';

const AdminPage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [languages, setLanguages] = useState([])
  const [levels, setLevels] = useState([])

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
};

const handleLevelChange = (event) => {
    setSelectedLevel(event.target.value);
};
  const [studentsCount, setStudentsCount] = useState(0);
  const [gradeAverage, setGradeAverage] = useState(0);
  const [speakingGradeAverage, setSpeakingGradeAverage] = useState(0);

  
  useEffect(() => {

    fetchLanguages().then((result => {
      setLanguages(result.data)
    }))

    fetchLevels().then((result) => {
        setLevels(result.data)
    })

  }, [])



  const handleGenerateReport = () => {
  
    let obj = {
      language : selectedLanguage,
      level : selectedLevel
    }

    let url = urllist.createQuery("http://localhost:3000/admin", obj)

    console.log(url)

    axios.get("http://localhost:3000/admin").then((result) => {

      console.log(result)

    })
  
  };


  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Generate System Report
      </Typography>
      <FormControl fullWidth className='margin-top-1'>
        <InputLabel>Language</InputLabel>
        <Select value={selectedLanguage} onChange={handleLanguageChange} label="Language">
        {languages.map((data, index) => (
            <MenuItem key={index} value={data.languagename}>
            {data.languagename}
            </MenuItem>
        ))}
        </Select>
    </FormControl>
    <FormControl fullWidth className='margin-top-1'>  
        <InputLabel>Min Level</InputLabel>
        <Select value={selectedLevel} onChange={handleLevelChange} label="Min Level">
        {levels.map((data, index) => (
            <MenuItem key={index} value={data.level}>
            {data.level}
            </MenuItem>
        ))}
        </Select>
    </FormControl>
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

async function fetchLevels(){
  let result = await axios.get("http://localhost:3000/learner/requests/getLevels")
  return result;
} 

async function fetchLanguages(){
  let result = await axios.get("http://localhost:3000/learner/requests/getLanguages")
  return result;
}

export default AdminPage;
