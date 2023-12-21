import React, { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import { styled } from '@mui/system';
import { Grid, Paper, Typography, TextField,Stack,Button, Link, FormControl,  } from '@mui/material';
import MainLayout from '../Components/MainLayout';
import urlList from '../urllist';
import sendRequest from '../axios';
import axios from 'axios';
import PopupTeacherLanguageContent from '../Components/PopupTeacherLanguageContent';
import Popup from '../Components/PopupComponent';
import TeacherLayout from '../Components/TeacherLayout';

let globalUser = JSON.parse(localStorage.getItem('user'))


const listOfUrl = urlList.urlList
const createQuery = urlList.createQuery


const UserInfo = ({ user }) => {


  const [name, setName] = useState("")
  const [surName, setSurname] = useState("")
  const [email, setEmail] = useState("")
  const [gender, setGender] = useState("")
  const [pronunciation, setPronunciation ] = useState("")

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSurnameChange = (event) => {
    setSurname(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handlePronunciationChange = (event) => {
    setPronunciation(event.target.value);
  };


  const updateInfo = () => {

    let user = {
      "teacherId" : globalUser.id,
      "name" : name,
      "surname" : surName,
      "gender" : gender,
      "email" : email,
      "pronunciation" : pronunciation
    }

    console.log(user)
    
    axios.put("http://localhost:3000/teacher/myProfile/updateInfo", user)

  }

  return (
      <Paper elevation={3} sx={{width: '25ch', padding:2,}} >
          <Stack component="form" sx={{width: '25ch',}} spacing={2} noValidateautoComplete="off">
              <Typography variant="h6">Profile Information</Typography>
              <Avatar sx={{ bgcolor: deepOrange[500] }}>J</Avatar>
              <TextField onChange={handleNameChange} label="Name" defaultValue={user.name} variant="filled" />
              <TextField onChange={handleSurnameChange} label="Surname" defaultValue={user.name} variant="filled" />
              <TextField onChange={handleEmailChange} label="Email" defaultValue={user.email} variant="filled" />
              <TextField onChange={handleGenderChange} label="Gender" defaultValue={user.gender} variant="filled" />
              <TextField onChange={handlePronunciationChange} label="Pronunciation" defaultValue={user.pronunciation} variant="filled" />
              <Button onClick={() => updateInfo()} variant="contained">Update</Button>
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
    <TeacherLayout children={
        <div>
            <Paper elevation={1} sx={{padding:2,}}>
                <Typography variant="h4">Teacher Profile</Typography>
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
            <Popup open={isPopupOpen} onClose={closePopup} content={<PopupTeacherLanguageContent/>} title={"Add Language"}/>
        </div>
        }/>
  );
};
export default TeacherProfile;