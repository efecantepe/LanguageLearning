import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Box, Grid, Paper } from '@mui/material';
import CourseComponent from '../Components/CourseComponent';
import Popup from '../Components/PopupComponent';
import '../Css/Components.css'
import MainLayout from '../Components/MainLayout';
import PopupRegisterComponent from '../Components/PopupRegisterComponent';
import TeacherCourseComponent from '../Components/TeacherCourseComponent';


const activeCoursesData = [
    {id: 1, title: 'Sample Course', learner: 'Berkley Rush', registerDate: '12.12.2022', homework: 'Book 1 Reeding', feedback: 'Great Work!', teacher: 'Alex Hale', language: 'English', level: 'A1', status: 'Active', progress: '%20', meetingDate: '01.01.2023', description: 'Description for the sample course.'},
    {id: 2, title: 'Sample Course', learner: 'Berkley Rush', registerDate: '12.12.2022', homework: 'Book 1 Reeding', feedback: 'Great Work!', teacher: 'Alex Hale', language: 'English', level: 'A1', status: 'Active', progress: '%20', meetingDate: '01.01.2023', description: 'Description for the sample course.'},
    {id: 5, title: 'Sample Course', learner: 'Berkley Rush', registerDate: '12.12.2022', homework: 'Book 1 Reeding', feedback: 'Great Work!', teacher: 'Alex Hale', language: 'English', level: 'A1', status: 'Active', progress: '%20', meetingDate: '01.01.2023', description: 'Description for the sample course.'},
    {id: 6, title: 'Sample Course', learner: 'Berkley Rush', registerDate: '12.12.2022', homework: 'Book 1 Reeding', feedback: 'Great Work!', teacher: 'Alex Hale', language: 'English', level: 'A1', status: 'Active', progress: '%20', meetingDate: '01.01.2023', description: 'Description for the sample course.'}
];

const finishedCoursesData = [
    {id: 3, title: 'Sample Course', learner: 'Berkley Rush', registerDate: '12.12.2022', homework: 'Book 1 Reeding', feedback: 'Great Work!', teacher: 'Alex Hale', language: 'English', level: 'A1', status: 'Active', progress: '%20', meetingDate: '01.01.2023', description: 'Description for the sample course.'},
    {id: 4, title: 'Sample Course', learner: 'Berkley Rush', registerDate: '12.12.2022', homework: 'Book 1 Reeding', feedback: 'Great Work!', teacher: 'Alex Hale', language: 'English', level: 'A1', status: 'Active', progress: '%20', meetingDate: '01.01.2023', description: 'Description for the sample course.'}
];   

const TeacherClass = () => {
    const [activeCourses, setActiveCourses] = useState(activeCoursesData);
    const [finishedCourses, setFinishedCourses] = useState(finishedCoursesData);
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

    const handleAction = () => {
        console.log('Action performed within the popup');
        closePopup();
    };

  return (
    <MainLayout children={
      <div>
        <div>
        <Paper>
          <Typography variant="h4" gutterBottom>
            <Grid container >
              <Grid item xs={6} className='margin-top-1'>
              <Box sx={{ display: 'flex', justifyContent: 'flex-start', padding:1}}>
                Active Courses
              </Box>
              </Grid>
              <Grid item xs={6} className='margin-top-1'>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', padding:1}}>
              </Box>
              </Grid>
            </Grid>
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', overflowX: 'auto', width:700 }}>
          {activeCourses.map((course) => (
            <TeacherCourseComponent course={course} />
          ))}
          </Box>
          </Paper>
        </div>

        <div>
          <Paper>
          <Typography variant="h4" gutterBottom>
            Finished Courses
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', overflowX: 'auto', width:700 }}>
          {finishedCourses.map((course) => (
            <TeacherCourseComponent course={course}/>
          ))}
          </Box>
          </Paper>
        </div>
      </div>
    }/>
  );
};

export default TeacherClass;
