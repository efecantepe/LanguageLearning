import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import React from 'react';
import { styled } from '@mui/system';
import { Grid, Paper, Typography, TextField,Stack,Button } from '@mui/material';
import MainLayout from '../Components/MainLayout';

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

const MyLanguages = ({ languages }) => {
    return (
        <Paper elevation={3}>
            <Typography variant="h6">My Languages</Typography>
                <ul>
                    {languages.map((language, index) => (
                    <li key={index}>{language.title}</li>
                    ))}
                </ul>
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
    </Paper>
  );
};

const ProfilePage = () => {
  const classes = useStyles();


  const user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    gender: 'Male',
    pronunciation: 'He/Him',
    language: 'Spanish',
  };

  const myLanguages = [
    { title: 'English: Native' },
    { title: 'French: B2' },
  ];

  const enrolledCourses = [
    { title: 'Spanish A1' },
    { title: 'Turkish C2' },
  ];

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
    </div>
    }/>
  );
};

export default ProfilePage;
