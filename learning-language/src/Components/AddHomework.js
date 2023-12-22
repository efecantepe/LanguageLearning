import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, FormControl,MenuItem,Select,InputLabel, Box,TextField  } from '@mui/material';
import axios from 'axios';

const AddHomework = ({ onCloseAndRefresh }) => {
  const [homeworkText, setHomeworkText] = useState('');
  const [selectCourse, setSelectCourse] = useState('');
  const [courses, setCourses] = useState([])

  const handleHomeworkChange = (e) => {
    setHomeworkText(e.target.value);
  };
  const handleCourse = (e) => {
    setSelectCourse(e.target.value);
  };

  
  async function fetchCourses(){
    let result
    return result;
}

  fetchCourses().then((result) => {
    setCourses(result.data)
})

  const sendHomework = async () => {

  };

  return (
    <Card variant="outlined" sx={{ display: 'inline-block', minWidth: 300 }}>
      <CardContent>
      <FormControl fullWidth className='margin-top-1'>  
                    <InputLabel>Select Course</InputLabel>
                    <Select value={selectCourse} onChange={handleCourse} label="Max Level">
                    {courses.map((data, index) => (
                        <MenuItem key={index} value={data.course}>
                        {data.course}
                        </MenuItem>
                    ))}
                    </Select>
                </FormControl>
        <TextField
          label="Enter Homework Text"
          value={homeworkText}
          onChange={handleHomeworkChange}
          multiline
          rows={4}
          fullWidth
          margin="normal"
        />
        <Button variant="contained" onClick={sendHomework}>
          Send Homework
        </Button>
      </CardContent>
    </Card>
  );
};

export default AddHomework;
