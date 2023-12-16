import React, { useEffect, useState } from 'react';
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

const listOfUrl = urlList.urlList
const createQuery = urlList.createQuery

const UserInfo = ({ user }) => {
  return (
      <Paper elevation={3} sx={{width: '25ch', padding:2,}} >
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

const TeacherProfile = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const openPopup = () => { setPopupOpen(true);};
  const closePopup = () => { setPopupOpen(false);};

  const handleAction = () => {
    console.log('Action performed within the popup');
    closePopup();
  };
  
  const [user, setUser] = useState([]);
  let myLanguages = [{}]


  const [languages1, setLanguages1] = useState([])

  const MyLanguages = ({ languages }) => {
    return (
        <Paper elevation={3} sx={{width: '25ch', padding:2,}}>
            <Typography variant="h6">My Languages</Typography>
                <ul>
                    {languages1.map((language, index) => (
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
        <div>
            <Paper elevation={1} sx={{padding:2,}}>
                <Typography variant="h4">Learner Profile</Typography>
                <hr/>
                <Grid container spacing={12}>
                    <Grid item xs={8} sm={6}>
                    <UserInfo user={user} />
                    </Grid>
                    <Grid item xs={4} sm={6}>
                        <MyLanguages languages={myLanguages} />
                    </Grid>
                </Grid>
            </Paper>
            <Popup open={isPopupOpen} onClose={closePopup} content={<PopupLanguageContent/>} actionText="Add Language" onAction={handleAction}/>
        </div>
        }/>
  );
};
export default TeacherProfile;