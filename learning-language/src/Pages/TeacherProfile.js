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


  const [name, setName] = useState(globalUser.name)
  const [surName, setSurname] = useState(globalUser.surname)
  const [email, setEmail] = useState(globalUser.email)
  const [gender, setGender] = useState(globalUser.gender)

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



  const updateInfo = () => {

    let user = {
      "teacherId" : globalUser.id,
      "name" : name,
      "surname" : surName,
      "gender" : gender,
      "email" : email,
    }

    console.log(user)
    
    axios.put("http://localhost:3000/teacher/myProfile/updateInfo", user).then((result) => {

        localStorage.setItem('user', JSON.stringify(obj))


    })

  }

  return (
      <Paper elevation={3} sx={{width: '25ch', padding:2,}} >
          <Stack component="form" sx={{width: '25ch',}} spacing={2} noValidateautoComplete="off">
              <Typography variant="h6">Profile Information</Typography>
              <Avatar sx={{ bgcolor: deepOrange[500] }}>J</Avatar>
              <TextField onChange={handleNameChange} label="Name" defaultValue={globalUser.name} variant="filled" />
              <TextField onChange={handleSurnameChange} label="Surname" defaultValue={globalUser.surname} variant="filled" />
              <TextField onChange={handleEmailChange} label="Email" defaultValue={globalUser.email} variant="filled" />
              <TextField onChange={handleGenderChange} label="Gender" defaultValue={globalUser.gender} variant="filled" />
              <Button onClick={() => updateInfo()} variant="contained">Update</Button>
          </Stack>
      </Paper>
  );
};

const TeacherProfile = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const openPopup = () => { setPopupOpen(true);};
  const closePopup = () => { setPopupOpen(false);};

  const closePopupAndRefresh = () => {
    setPopupOpen(false)
    window.location.reload();
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
            <Popup open={isPopupOpen} onClose={closePopup} content={<PopupTeacherLanguageContent onCloseAndRefresh={closePopupAndRefresh}/>} title={"Add Language"}/>
        </div>
        }/>
  );
};
export default TeacherProfile;