import React, { useEffect, useState } from 'react';
import { TextField, Button, Card, CardContent, Typography ,Paper,Grid,Box } from '@mui/material';
import axios from 'axios';
import AddHomework from '../Components/AddHomework';
import Popup from '../Components/PopupComponent';
import TeacherLayout from '../Components/TeacherLayout';
import HomeworkComponent from '../Components/HomeworkComponent';

let globalUser = JSON.parse(localStorage.getItem('user'))

const TeacherHomework = () => {
  const [waitingHomeworks, setWaitingHomeworks] = useState([]);
  
  useEffect(() => {
    fetchWaitHomeworks().then((result) => {
    
      if(result.length !== 0){
        setWaitingHomeworks(result)
      }
      
    })
}, [])



  const [isPopupOpen, setPopupOpen] = useState(false);

    const handleRegisterCourse = (courseId, courseType) => {
        console.log(`Registered for ${courseType} course with ID ${courseId}`);
    };

    const openPopup = () => {
        setPopupOpen(true);
    };

    const closePopup = () => {
        setPopupOpen(false);
    };

    const closePopupAndRefresh = () => {
      setPopupOpen(false)
      window.location.reload();
    };

  return (
    <TeacherLayout>
    <div>
        <Paper>
          <Typography variant="h6" gutterBottom>
            <Grid container >
              <Grid item xs={6} className='margin-top-1'>
              <Box sx={{ display: 'flex', justifyContent: 'flex-start', padding:1}}>
                Waiting Homeworks
              </Box>
              </Grid> 
              <Grid item xs={6} className='margin-top-1'>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', padding:1}}>
                <Button variant="contained" color="success" onClick={openPopup}>New Homework</Button>
              </Box>
              
              </Grid>
            </Grid>
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', overflowX: 'auto', width:600 }}>
          {waitingHomeworks.map((homework) => (
            <HomeworkComponent homework={homework} />
          ))}
          </Box>
          </Paper>
          <Popup open={isPopupOpen} onClose={closePopup} title="Add Homework" 
            content={<AddHomework onCloseAndRefresh={closePopupAndRefresh} />} />
        </div>
        </TeacherLayout>
  );
};

async function fetchWaitHomeworks(){

  let user = {
    learnerid : globalUser.id
  }

}

export default TeacherHomework;
