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
      <Paper elevation={3} sx={{width: '25ch', padding:2,}}>
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
    <Paper elevation={3} sx={{width: '25ch', padding:2,}}>
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

  const [user, setUser] = useState([]);

  //const [myLanguages, setMyLanguages] = useState([])

  let myLanguages = [{}]
      

  /*    
  useEffect(() => {
    axios.get(listOfUrl.getLanguages).then((result) => {
      //console.log(result)

    })
  }, [])
*/

  /*
  useEffect(() => {

  })

  useEffect(() => {
    

  })
  */




  /*

  const myLanguages = [
    { title: 'English: Native ahjskdasjkdhasdjkhasd' },
    { title: 'French: B2' },
  ];

  */

  const enrolledCourses = [
    { title: 'Spanish A1' },
    { title: 'Turkish C2' },
  ];

  const params = {learnerId : "a18fbf9acca53f39a929"}
  const [languages1, setLanguages1] = useState([])
  console.log(params)
  
  let url = createQuery(listOfUrl.learnerLanguages, params)
  
  
  /*
  useEffect(() => {
        axios.get(url).then((result) => {
        const learnerLanguage = result.data
        const myLanguages = []
        for(let a = 0; a < learnerLanguage.length; a++){
          myLanguages.push({title : `${learnerLanguage.languageName} ${learnerLanguage.level}`})
        }
        console.log(myLanguages)
        setLanguages1(myLanguages)
    });
  }, []);
  */
  


  //NEDEN YANlIS OLSUN

  const MyLanguages = ({ languages }) => {
  
    
  // Alper: useState, useEffect, HTTP requests get, post, put, delete
  
  // Post: body -> JSON
  // Get : query
  // PUT bilinmiyor bakilmasi lazim
  // Useeffect yazilacak uygun axiosla. Eger use state tanimlanmazsa use state de tanimlanacak.


/* BEN ALPEREN TEST ICIN COMMENT ATTIM. SIZ ACABILIRSINIZ, SORUN YOK
  useEffect(() => {
      axios.get(url).then((result) => {
      const learnerLanguage = result.data;
      const myLanguages = learnerLanguage.map((language) => ({
        title: `${language.languagename}  ${language.level}`,
      }
      ));
      setLanguages1(myLanguages);
    });
  }, []); // Empty dependency array causes the effect to run only on mount
  */


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
        <Grid container>
          <Grid item xs={6} sm={6}>
            <UserInfo user={user} />
          </Grid>
          <Grid item xs={6} sm={6}>
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
      </Paper>
      <Popup open={isPopupOpen} onClose={closePopup} content={<PopupLanguageContent/>} actionText="Add Language" onAction={handleAction}/>
    </div>
    }/>
  );
};
export default ProfilePage;