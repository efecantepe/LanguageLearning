import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Button, FormControl,MenuItem,Select,InputLabel, Box,TextField  } from '@mui/material';
import axios from 'axios';
import urlList from '../urllist'

let globalUser = JSON.parse(localStorage.getItem('user'))

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
    let user = {
      teacherid : globalUser.id
    }
    let url = urlList.createQuery("http://localhost:3000/teacher/myClasses/getActiveClasses", user)
    let result = await axios.get(url)
  
    return result.data
}

    useEffect(() => {

      
      fetchCourses().then((result) => {

          console.log(result)

          setCourses(result)
      })

    }, [])


  const sendHomework = async () => {

    if (homeworkText.trim() !== '') {
      try {
          // Simulating the upload process
          console.log('Homework uploaded:', homeworkText);

          //console.log(course)

          console.log(selectCourse)

          const [classid, learnerid] = selectCourse.split('-');
          
          let obj = {

              classid : classid,
              teacherid : globalUser.id,
              learnerid :  learnerid,
              homeworksdescription : homeworkText

          }

          axios.post("http://localhost:3000/teacher/myClasses/addHomework", obj)


          //setIsTextFieldLocked(true);
      } catch (error) {
          console.error('Error uploading homework:', error);
      }

  };
}

  return (
    <Card variant="outlined" sx={{ display: 'inline-block', minWidth: 300 }}>
      <CardContent>
      <FormControl fullWidth className='margin-top-1'>  
                    <InputLabel>Select Course</InputLabel>
                    <Select value={selectCourse} onChange={handleCourse} label="Max Level">
                    {courses.map((data, index) => (
                        <MenuItem key={index} value={`${data.classid}-${data.learnerid}`}>
                        {data.learnername} {data.languagename} {data.classlevel}
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
        <Button variant="contained" onClick={() =>{sendHomework();onCloseAndRefresh()}}>
          Send Homework
        </Button>
      </CardContent>
    </Card>
  );
};

export default AddHomework;
