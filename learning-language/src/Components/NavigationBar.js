import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';
import '../Css/Components.css'
import { AppBar, Toolbar, Typography, Button, Paper, MenuList, ListItemIcon, MenuItem,ListItemText } from '@mui/material';

const useStyles = styled((theme) => ({
  title: {
    flexGrow: 1,
  },
}));

const NavigationBar = () => {
  const classes = useStyles();
  return (
    <Paper sx={{ width: 320, maxWidth: '100%' }}>
    <MenuList>
      <Link to="/" className='link-style'>
        <MenuItem>
          <ListItemIcon>
          </ListItemIcon>
          <ListItemText>Dashboard</ListItemText>
        </MenuItem>
      </Link>
      <Link to="/profile" className='link-style'>
        <MenuItem>
          <ListItemIcon>
          </ListItemIcon>
          <ListItemText>Profile Page</ListItemText>
        </MenuItem>
      </Link>
      <Link to="/courses" className='link-style'>
        <MenuItem>
          <ListItemIcon>
          </ListItemIcon>
          <ListItemText>Courses</ListItemText>
        </MenuItem>
      </Link>
      </MenuList>
    </Paper>
    
  );
};

export default NavigationBar;
