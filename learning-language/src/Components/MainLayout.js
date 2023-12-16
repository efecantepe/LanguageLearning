import React from 'react';
import { styled } from '@mui/system';
import { Container,Grid  } from '@mui/material';
import NavigationBar from './NavigationBar';
import '../Css/Components.css';
import Header from './Header';

const MainLayout = ({ children }) => {
  return (
    <div className='main'>
      <Container maxWidth="lg">
        <Header/>
        <Grid container >
          <Grid >
            <NavigationBar/>
          </Grid>
          <Grid sx={{paddingLeft:2}}>
            {children}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default MainLayout;
