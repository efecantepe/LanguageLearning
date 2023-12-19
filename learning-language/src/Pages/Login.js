import React, { useState } from 'react';
import urlList from '../urllist';
import sendRequest from '../axios';
import axios from 'axios';
import { Container,Grid,TextField,FormControl,MenuItem,Select,InputLabel,Box,Button  } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../Css/Components.css';
import Header from '../Components/Header'
import User from './User';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setRole] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    console.log("Email", email)
    console.log("Password", password)
    console.log("User Type", userType)

    let obj = {

      "username" : email,
      "password" : password,
      "user_type" : userType

    }

    let url = urlList.createQuery("http://localhost:3000/login", obj)

    let response = axios.get(url)

    response.then((result) => {

        console.log(result)

        if(result.data.length === 0){

          console.log("You Are Wrong")
          
        }

        else if(result.data.length === 1){
          setLoggedIn(true)

          console.log(userType)

          if(userType === 'learner'){
            new User(result.data.learnerid, result.data.learnername, result.data.surname, result.data.email)
            navigate('/profile')
          }

          else if (userType === 'teacher'){



            new User(result.data.teacherid, result.data.teachername, result.data.surname, result.data.email)
            navigate('/TeacherProfile')
          }
          //navigate('/profile');
        }
    })
  };

  return (
    <div className='main'>
      <Container maxWidth="lg">
        <Header/>
        <Grid container justifyContent="center">
          <Grid sx={{paddingLeft:2}}>
            <div>
                <FormControl sx={{width:'50ch'}}>
                  <TextField variant='filled' id="outlined-required" label="Email"  type="email" value={email} onChange={(e) => setEmail(e.target.value)} sx={{margin:2, backgroundColor:'white'}}/>
                  <TextField variant='filled' id="outlined-required" label="Password"  type="password" value={password} onChange={(e) => setPassword(e.target.value)} sx={{margin:2, backgroundColor:'white'}}/>
                  <FormControl variant="filled" sx={{ m: 1, width:'50ch' }}>
                    <InputLabel  sx={{margin:1}}>User Type</InputLabel>
                    <Select  value={userType} onChange={(e) => setRole(e.target.value)} sx={{margin:1,marginRight:3, backgroundColor:'white'}}>
                      <MenuItem value={'learner'}>Learner</MenuItem>
                      <MenuItem value={'teacher'}>Teacher</MenuItem>
                      <MenuItem value={'admin'}>Admin</MenuItem>
                    </Select>
                  </FormControl>
                  <Box sx={{display: 'flex', justifyContent: 'space-between', width: '100%',}}>
                    <Button variant="contained" href='/Register' >
                        Register
                    </Button>
                    <Button type="submit" variant="contained" color='success' onClick={handleLoginSubmit}>
                        Login
                    </Button>
                </Box>
                </FormControl>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Login;
