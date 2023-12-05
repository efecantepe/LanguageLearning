import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const useStyles = styled((theme) => ({
  title: {
    flexGrow: 1,
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
    marginRight: theme.spacing(2),
  },
}));

const NavigationBar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Language Learning Platform
        </Typography>
        <Button variant="contained" color="success">
          <Link to="/" className={classes.link}>
            Main Page
          </Link>
        </Button>
        <Button variant="contained" color="error">
          <Link to="/profile" className={classes.link}>
            Profile Page
          </Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
