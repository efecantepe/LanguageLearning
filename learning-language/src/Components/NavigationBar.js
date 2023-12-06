import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';
import '../Css/Components.css'
import { AppBar, Toolbar, Typography, Button, Paper, MenuList, ListItemIcon, MenuItem,ListItemText, Icon } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ClassIcon from '@mui/icons-material/Class';

const useStyles = styled((theme) => ({
  title: {
    flexGrow: 1,
  },
}));

const NavigationBar = () => {
  const classes = useStyles();
  return (
    <Paper sx={{ width: 256, maxWidth: '100%' }}>
    <MenuList>
      <Link to="/" className='link-style'>
        <MenuItem>
          <ListItemIcon HomeIcon>
            <HomeIcon/>
          </ListItemIcon>
          <ListItemText>Dashboard</ListItemText>
        </MenuItem>
      </Link>
      <Link to="/profile" className='link-style'>
        <MenuItem>
          <ListItemIcon>
            <AccountBoxIcon/>
          </ListItemIcon>
          <ListItemText>Profile Page</ListItemText>
        </MenuItem>
      </Link>
      <Link to="/courses" className='link-style'>
        <MenuItem>
          <ListItemIcon>
            <ClassIcon />
          </ListItemIcon>
          <ListItemText>Courses</ListItemText>
        </MenuItem>
      </Link>
      </MenuList>
    </Paper>
    
  );
};

export default NavigationBar;
