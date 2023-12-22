import React, { useState } from 'react';
import urlList from '../urllist';
import sendRequest from '../axios';
import axios from 'axios';
import { Container,Grid,TextField,FormControl,MenuItem,Select,InputLabel,Box,Button,Snackbar  } from '@mui/material';
import '../Css/Components.css';
import Header from '../Components/Header'


const Register = () => {
  const [userName, setUserName] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setRole] = useState('');
  const [gender, setGender] = useState('');
  const [notification, setNotification] = useState({ open: false, message: '', severity: 'success' });

  const handleNotificationClose = () => {
    setNotification({ ...notification, open: false });
  };

  const showNotification = (message, severity) => {
    setNotification({ open: true, message, severity });
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const refresh = () => {
    window.location.reload();
  };

  const RegisterSubmit = async (username, name, surname, email, password, gender, userType) => {
    username = username.trim();
    name = name.trim();
    surname = surname.trim();
    email = email.trim();
    password = password.trim();
    gender = gender.trim();
    userType = userType.trim();

    if (!username || !name || !surname || !email || !password || !gender || !userType) {
      showNotification('Please fill in all fields.', 'error');
      return;
    }

    if (!isValidEmail(email)) {
      showNotification('Please enter a valid email address.', 'error');
      return;
    }

    try {
      const obj = {
        username,
        name,
        surname,
        email,
        password,
        gender,
        user_type: userType
      };

      await axios.post('http://localhost:3000/register', obj);
      showNotification('Registration successful!', 'success');
    } catch (error) {
      showNotification('Registration failed. Please try again.', 'error');
      console.error('Error during registration:', error);
    }
  };

  return (

    <div className='main'>
      <Container maxWidth="lg">
        <Header/>
        <Grid container justifyContent="center">
          <Grid sx={{paddingLeft:2}}>
            <div>
                <FormControl sx={{width:'50ch'}}>
                  <TextField variant='filled' id="outlined-required" label="Username" type="userName"  value={userName} onChange={(e) => setUserName(e.target.value)} sx={{margin:2, backgroundColor:'white'}}/>
                  <TextField variant='filled' id="outlined-required" label="Name" type="name" value={name} onChange={(e) => setName(e.target.value)} sx={{margin:2, backgroundColor:'white'}}/>
                  <TextField variant='filled' id="outlined-required" label="Surname"  type="surname" value={surname} onChange={(e) => setSurname(e.target.value)} sx={{margin:2, backgroundColor:'white'}}/>
                  <TextField variant='filled' id="outlined-required" label="Email"  type="email" value={email} onChange={(e) => setEmail(e.target.value)} sx={{margin:2, backgroundColor:'white'}}/>
                  <TextField variant='filled' id="outlined-required" label="Password"  type="password" value={password} onChange={(e) => setPassword(e.target.value)} sx={{margin:2, backgroundColor:'white'}}/>
                  <FormControl variant="filled" sx={{ m: 1, width:'50ch' }}>
                    <InputLabel sx={{margin:1}}>Gender</InputLabel>
                    <Select value={gender} onChange={(e) => setGender(e.target.value)} sx={{margin:1,marginRight:3, backgroundColor:'white'}}>
                      <MenuItem value={'Female'}>Female</MenuItem>
                      <MenuItem value={'Male'}>Male</MenuItem>
                      <MenuItem value={'Other'}>Other</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl variant="filled" sx={{ m: 1, width:'50ch' }}>
                    <InputLabel  sx={{margin:1}}>User Type</InputLabel>
                    <Select  value={userType} onChange={(e) => setRole(e.target.value)} sx={{margin:1,marginRight:3, backgroundColor:'white'}}>
                      <MenuItem value={'learner'}>Student</MenuItem>
                      <MenuItem value={'teacher'}>Teacher</MenuItem>
                      <MenuItem value={'admin'}>Admin</MenuItem>
                    </Select>
                  </FormControl>
                  <Box sx={{display: 'flex', justifyContent: 'space-between', width: '100%',}}>
                    <Button variant="contained" href='/login' >
                        Login
                    </Button>
                    <Button type="submit" variant="contained" color='success' onClick={() => {RegisterSubmit(userName, name, surname, email, password, gender, userType)}}>
                        Register
                    </Button>
                </Box>
                </FormControl>
            </div>
          </Grid>
        </Grid>
        <Snackbar
          open={notification.open}
          autoHideDuration={6000}
          onClose={handleNotificationClose}
          message={notification.message}
          severity={notification.severity}
        />
      </Container>
    </div>
  );
};

export default Register;
