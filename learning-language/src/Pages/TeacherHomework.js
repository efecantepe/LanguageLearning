import React, { useState } from 'react';
import { TextField, Button, Card, CardContent, Typography ,Paper,Grid,Box } from '@mui/material';
import axios from 'axios';
import AddHomework from '../Components/AddHomework';
import Popup from '../Components/PopupComponent';
import TeacherLayout from '../Components/TeacherLayout';

const TeacherHomework = ({ courseId }) => {
  const [homeworkText, setHomeworkText] = useState('');

  const handleHomeworkChange = (e) => {
    setHomeworkText(e.target.value);
  };

  const sendHomework = async () => {
    if (homeworkText.trim() !== '') {
      try {
        const homeworkData = {
          courseId: courseId,
          text: homeworkText,
        };

        // Send homework data to the server
        const response = await axios.post('YOUR_ENDPOINT_TO_SEND_HOMEWORK', homeworkData);
        console.log('Homework sent:', response.data);

        // Reset the homework text field after successful submission
        setHomeworkText('');
      } catch (error) {
        console.error('Error sending homework:', error);
      }
    } else {
      console.error('Homework text is empty');
    }
  };


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
          </Box>
          </Paper>
          <Popup open={isPopupOpen} onClose={closePopup} title="Add Homework" 
        content={<AddHomework onCloseAndRefresh={closePopupAndRefresh} />} />
        </div>
        </TeacherLayout>
  );
};

export default TeacherHomework;
