import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Button, Box, Grid, Paper } from '@mui/material';
import CourseComponent from '../Components/CourseComponent';
import Popup from '../Components/PopupComponent';
import '../Css/Components.css'
import MainLayout from '../Components/MainLayout';
import PopupRegisterComponent from '../Components/PopupRegisterComponent';
import TeacherCourseComponent from '../Components/TeacherCourseComponent';
import urllist from '../urllist';
import axios  from 'axios';
import TeacherLayout from '../Components/TeacherLayout';

let globalUser = JSON.parse(localStorage.getItem('user'))


const activeCoursesData = [
    {id: 1, title: 'Sample Course', learner: 'Berkley Rush', registerDate: '12.12.2022', homework: 'Book 1 Reeding', feedback: 'Great Work!', teacher: 'Alex Hale', language: 'English', level: 'A1', status: 'Active', progress: '%20', meetingDate: '01.01.2023', description: 'Description for the sample course.'},

    {id: 2, title: 'Sample Course', learner: 'Berkley Rush', registerDate: '12.12.2022', homework: 'Book 1 Reeding', feedback: 'Great Work!', teacher: 'Alex Hale', language: 'English', level: 'A1', status: 'Waiting', progress: '%20', meetingDate: '01.01.2023', description: 'Description for the sample course.'},
    {id: 5, title: 'Sample Course', learner: 'Berkley Rush', registerDate: '12.12.2022', homework: 'Book 1 Reeding', feedback: 'Great Work!', teacher: 'Alex Hale', language: 'English', level: 'A1', status: 'Active', progress: '%20', meetingDate: '01.01.2023', description: 'Description for the sample course.'},
    {id: 6, title: 'Sample Course', learner: 'Berkley Rush', registerDate: '12.12.2022', homework: 'Book 1 Reeding', feedback: 'Great Work!', teacher: 'Alex Hale', language: 'English', level: 'A1', status: 'Active', progress: '%20', meetingDate: '01.01.2023', description: 'Description for the sample course.'}
];

const finishedCoursesData = [
    {id: 3, title: 'Sample Course', learner: 'Berkley Rush', registerDate: '12.12.2022', homework: 'Book 1 Reeding', feedback: 'Great Work!', teacher: 'Alex Hale', language: 'English', level: 'A1', status: 'Finished', progress: '%20', meetingDate: '01.01.2023', description: 'Description for the sample course.'},
    {id: 4, title: 'Sample Course', learner: 'Berkley Rush', registerDate: '12.12.2022', homework: 'Book 1 Reeding', feedback: 'Great Work!', teacher: 'Alex Hale', language: 'English', level: 'A1', status: 'Finished', progress: '%20', meetingDate: '01.01.2023', description: 'Description for the sample course.'}
];  

const TeacherClass = () => {
    const [activeCourses, setActiveCourses] = useState([]);
    const [finishedCourses, setFinishedCourses] = useState([]);
    const [waitingCourses, setWaitingCourses] = useState([])

    
    useEffect(() => {


      fetchActiveCourses().then((result) => {

        if(result.length !== 0){
          setActiveCourses(result)
        }
        

      })

      fetchWaitingCourses().then((result) => {

        if(result.length !== 0){
          setWaitingCourses(result)
        }
        

      })

      fetchFinishedCourses().then((result) => {
        if(result.length !== 0){
          setFinishedCourses(result)
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

    const handleAction = () => {
        console.log('Action performed within the popup');
        closePopup();
    };

  return (
    <TeacherLayout children={
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
          {activeCoursesData.map((course) => (
            <TeacherCourseComponent course={course} />
          ))}
          </Box>
          </Paper>
        </div>

        <div>
          <Paper>
          <Typography variant="h4" gutterBottom>
            Waiting Courses
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', overflowX: 'auto', width:700 }}>
          {waitingCourses.map((course) => (
            <TeacherCourseComponent course={course}/>
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

async function fetchActiveCourses(){
  let user = {
    teacherid : globalUser.id
  }
  let url = urllist.createQuery("http://localhost:3000/teacher/myClasses/getActiveClasses", user)
  let result = await axios.get(url)

  return result.data

}

async function fetchRejectedCourses(){

  let user = {
    teacherid : globalUser.id
  }
  let url = urllist.createQuery("http://localhost:3000/teacher/myClasses/getRejectedClasses", user)
  let result = await axios.get(url)

  return result.data

}

async function fetchWaitingCourses(){

  let user = {
    teacherid : globalUser.id
  }
  let url = urllist.createQuery("http://localhost:3000/teacher/myClasses/getWaitingClasses", user)
  let result = await axios.get(url)

  console.log(result.data)


  return result.data

}

async function fetchFinishedCourses(){

  let user = {
    teacherid : globalUser.id
  }
  let url = urllist.createQuery("http://localhost:3000/teacher/myClasses/getFinishedClasses", user)
  let result = await axios.get(url)

  return result.data

}


export default TeacherClass;

