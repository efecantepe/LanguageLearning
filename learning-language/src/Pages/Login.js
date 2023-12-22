import React, { useState } from 'react';
import urlList from '../urllist';
import axios from 'axios';
import { Container, Grid, TextField, FormControl, MenuItem, Select, InputLabel, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../Css/Components.css';
import Header from '../Components/Header';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setRole] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);

  const displayError = (message) => {
    setErrorMessage(message);
  };

  const handleLoginSubmit = async (e) => {
    localStorage.removeItem('user');
    e.preventDefault();

    let obj = {
      username: email,
      password: password,
      user_type: userType,
    };

    let url = urlList.createQuery('http://localhost:3000/login', obj);

    try {
      const response = await axios.get(url);

      if (response.data.length === 0) {
        displayError('Incorrect username, password or user type. Please try again.');
        return;
      } else if (response.data.length === 1) {
        setLoggedIn(true);

        let data = response.data[0];
        let userObj = {
          id: data.learnerid,
          name: data.learnername,
          surname: data.surname,
          email: data.email,
          gender: data.gender,
        };

        localStorage.setItem('user', JSON.stringify(userObj));

        if (userType === 'learner') {
          navigate('/home');
        } else if (userType === 'teacher') {
          navigate('/TeacherHome');
        }
      }
    } catch (error) {
      displayError('An error occurred while processing your request. Please try again later.');
      console.error('Error:', error);
    }
  };

  return (
    <div className="main">
      <Container maxWidth="lg">
        <Header />
        <Grid container justifyContent="center">
          <Grid sx={{ paddingLeft: 2 }}>
            <div>
              <FormControl sx={{ width: '50ch' }}>
                <TextField
                  variant="filled"
                  id="outlined-required"
                  label="Username"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  sx={{ margin: 2, backgroundColor: 'white' }}
                />
                <TextField
                  variant="filled"
                  id="outlined-required"
                  label="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  sx={{ margin: 2, backgroundColor: 'white' }}
                />
                <FormControl variant="filled" sx={{ m: 1, width: '50ch' }}>
                  <InputLabel sx={{ margin: 1 }}>User Type</InputLabel>
                  <Select
                    value={userType}
                    onChange={(e) => setRole(e.target.value)}
                    sx={{ margin: 1, marginRight: 3, backgroundColor: 'white' }}
                  >
                    <MenuItem value={'learner'}>Learner</MenuItem>
                    <MenuItem value={'teacher'}>Teacher</MenuItem>
                    <MenuItem value={'admin'}>Admin</MenuItem>
                  </Select>
                </FormControl>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                  <Button variant="contained" href="/Register">
                    Register
                  </Button>
                  <Button type="submit" variant="contained" color="success" onClick={handleLoginSubmit}>
                    Login
                  </Button>
                </Box>
              </FormControl>
              {errorMessage && (
                <div style={{ color: 'red', textAlign: 'center', margin: '10px 0' }}>{errorMessage}</div>
              )}
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Login;
