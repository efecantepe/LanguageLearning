import React from 'react';
import { styled } from '@mui/system';
import { Container,Grid,Typography  } from '@mui/material';
import NavigationBar from './NavigationBar';
import '../Css/Components.css';
import Header from './Header';
import TeacherNavigation from './TeacherNavigation';

const TeacherLayout = ({ children }) => {
  return (
    <div className='main'>
      <Container maxWidth="lg">
        <Header/>
        <Grid container >
          <Grid >
            <TeacherNavigation/>
          </Grid>
          <Grid sx={{paddingLeft:2}}>
            {children}
          </Grid>
        </Grid>
      </Container>
      <footer style={{ display: 'flex', justifyContent: 'center', marginTop:10 }}>
        <Typography variant="body2" color="textSecondary">
          &copy; 2023 Online Language Learning Platform
        </Typography>
      </footer>
    </div>
  );
};

export default TeacherLayout;
