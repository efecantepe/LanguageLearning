import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import { styled } from '@mui/system';
import { Grid, Paper, Typography, TextField,Stack,Button, Link, FormControl,  } from '@mui/material';
import MainLayout from '../Components/MainLayout';
import urlList from '../urllist';
import sendRequest from '../axios';
import axios from 'axios';
import PopupLanguageContent from '../Components/PopupLanguageContent';
import Popup from '../Components/PopupComponent';
//import { response } from 'express';


const addLanguageDataContent = [
  {id: 1, language: 'English'},
  {id: 2, language: 'French'},
  {id: 3, language: 'Spanish'},
  {id: 4, language: 'Turkish'},
];

const useStyles = styled((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(2),
  },
}));



const UserInfo = ({ user }) => {
  return (
      <Paper elevation={3}>
          <Stack component="form" sx={{width: '25ch',}} spacing={2} noValidateautoComplete="off">
              <Typography variant="h6">Profile Information</Typography>
              <Avatar sx={{ bgcolor: deepOrange[500] }}>J</Avatar>
              <TextField label="Full Name" defaultValue={user.name} variant="filled" />
              <TextField label="Email" defaultValue={user.email} variant="filled" />
              <TextField label="Gender" defaultValue={user.gender} variant="filled" />
              <TextField label="Pronunciation" defaultValue={user.pronunciation} variant="filled" />
              <Button variant="contained">Update</Button>
          </Stack>
      </Paper>
  );
};



const EnrolledCourses = ({ courses }) => {
  return (
    <Paper elevation={3}>
      <Typography variant="h6">Enrolled Courses</Typography>
      <ul>
        {courses.map((course, index) => (
          <li key={index}>{course.title}</li>
        ))}
      </ul>
      <Button variant="contained" href='/courses'>
        My Classes
      </Button>
    </Paper>
  );
};

const ProfilePage = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const openPopup = () => { setPopupOpen(true);};
  const closePopup = () => { setPopupOpen(false);};

  const handleAction = () => {
    console.log('Action performed within the popup');
    closePopup();
  };
  
  const classes = useStyles();

  const [user, setUser] = useState([]);

/* AXIOS DISABLED FOR TEST
  useEffect(() => {

    axios.get(urlList.getLanguages).then((result) => {

      console.log(result)

    })

  }, [])
*/

  const myLanguages = [
    { title: 'English: Native ahjskdasjkdhasdjkhasd' },
    { title: 'French: B2' },
  ];

  const enrolledCourses = [
    { title: 'Spanish A1' },
    { title: 'Turkish C2' },
  ];


  const MyLanguages = ({ languages }) => {
    return (
        <Paper elevation={3}>
            <Typography variant="h6">My Languages</Typography>
                <ul>
                    {languages.map((language, index) => (
                    <li key={index}>{language.title}</li>
                    ))}
                </ul>
                <Button variant="contained" onClick={openPopup}>
                  Add Language
                </Button>
        </Paper>
    ); 
};

  return (
    <MainLayout children={
    <div className={classes.root}>
      <Typography variant="h4">User Profile</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <UserInfo user={user} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <MyLanguages languages={myLanguages} />
            </Grid>
            <Grid item xs={12}>
              <EnrolledCourses courses={enrolledCourses} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Popup open={isPopupOpen} onClose={closePopup} content={<PopupLanguageContent languageContent={addLanguageDataContent}/>} actionText="Perform Action" onAction={handleAction}/>
    </div>
    }/>
  );
};

export default ProfilePage;
