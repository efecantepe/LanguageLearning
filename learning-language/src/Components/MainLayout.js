import React from 'react';
import { styled } from '@mui/system';
import { Container } from '@mui/material';
import NavigationBar from './NavigationBar';

const useStyles = styled((theme) => ({
  root: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

const MainLayout = ({ children }) => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.root}>
      <NavigationBar/>
      {children}
    </Container>
  );
};

export default MainLayout;
