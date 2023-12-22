import React, { useEffect, useState } from 'react';
import { TextField, Button, Card, CardContent, Typography ,Paper,Grid,Box } from '@mui/material';
import axios from 'axios';
import AddHomework from '../Components/AddHomework';
import Popup from '../Components/PopupComponent';
import HomeworkComponent from '../Components/HomeworkComponent';
import urllist from '../urllist';
import MainLayout from '../Components/MainLayout';
import LearnerHomework from '../Components/LearnerHomework';

let globalUser = JSON.parse(localStorage.getItem('user'))

const HomeworkPage = () => {
  const [waitingHomeworks, setWaitingHomeworks] = useState([]);
  
  useEffect(() => {
    fetchWaitHomeworks().then((result) => {
    
      if(result.length !== 0){
        setWaitingHomeworks(result)
      }
      
    })
}, [])


  return (
    <MainLayout>
    <div>
        <Paper>
          <Typography variant="h6" gutterBottom>
            <Grid container >
              <Grid item xs={6} className='margin-top-1'>
              <Box sx={{ display: 'flex', justifyContent: 'flex-start', padding:1}}>
                Waiting Homeworks
              </Box>
              </Grid> 
            </Grid>
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', overflowX: 'auto', width:600 }}>
          {waitingHomeworks.map((homework) => (
            <LearnerHomework homework={homework} />
          ))}
          </Box>
          </Paper>
        </div>
        </MainLayout>
  );
};

async function fetchWaitHomeworks(){

  let user = {
    id : globalUser.id
  }

  let url = urllist.createQuery("http://localhost:3000/teacher/myClasses/waitingHomeworks", user)
  
  let result = await axios.get(url)

  console.log("--------" , result.data)

  return result.data.rows
}

export default HomeworkPage;
