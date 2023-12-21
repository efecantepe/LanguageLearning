import React from 'react';
import { Typography, Container, Grid, Paper } from '@mui/material';
import '../Css/Components.css'
import TeacherLayout from '../Components/TeacherLayout';

const TeacherHome = () => {
  return (
    <TeacherLayout children={
      <Container sx={{width:'90vh'}}>
        <Paper elevation={3} sx={{ p: 3, mb: 3  }}>
          <h1 className='test'>Welcome to Teacher Page!</h1>
          <section style={{paddingTop:20}}>
            <Typography className='test3' variant="h4" gutterBottom>
              Main Objective
            </Typography>
            <Typography variant="body1">
              The main objective of this project is to develop a language learning and exchange platform to bring linguaphiles, or anyone interested in learning/teaching languages, together.
            </Typography>
          </section>

          <section>
            <Typography variant="h4" gutterBottom>
              User Types
            </Typography>
            <Typography variant="body1">
              There will be two main user types on the platform: students and teachers. All user types will need to register to access the unique features.
            </Typography>
            {/* Add more details about the registration process */}
          </section>

          <section>
            <Typography variant="h4" gutterBottom>
              User Registration
            </Typography>
            <Typography variant="body1">
              Users must provide specific information during the registration process, including personal details, language proficiency levels, and optional biography or communication preferences.
            </Typography>
            {/* Describe the required information for students and teachers */}
          </section>

          <section>
            <Typography variant="h4" gutterBottom>
              Platform Features
            </Typography>
            <Typography variant="body1">
              Users can interact, search for and add friends, communicate via chat, enroll in appropriate courses, track their language learning progress, and receive feedback from teachers.
            </Typography>
            {/* Include details about the chat system, course enrollment, and progress tracking */}
          </section>

          <section>
            <Typography variant="h4" gutterBottom>
              Admin Access
            </Typography>
            <Typography variant="body1">
              Administrators will have access to all chats and courses, along with the ability to manage and edit user profiles.
            </Typography>
            {/* Describe the admin's role and access privileges */}
          </section>
        </Paper>
      </Container>
    }/>
  );
};

export default TeacherHome;
