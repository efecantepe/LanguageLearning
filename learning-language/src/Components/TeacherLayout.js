import React from 'react';
import { styled } from '@mui/system';
import { Container,Grid  } from '@mui/material';
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
    </div>
  );
};

export default TeacherLayout;
