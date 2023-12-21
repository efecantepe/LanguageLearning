import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { styled } from '@mui/system';
import '../Css/Components.css';
import {
  Paper,
  MenuList,
  ListItemIcon,
  MenuItem,
  ListItemText,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ClassIcon from '@mui/icons-material/Class';
import LogoutIcon from '@mui/icons-material/Logout';

const useStyles = styled((theme) => ({
  title: {
    flexGrow: 1,
  },
}));

const TeacherNavigation = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    navigate(path); // Navigate to the specified path
    window.location.reload(); // Refresh the page
  };

  return (
    <Paper sx={{ width: 256, maxWidth: '100%' }}>
      <MenuList>
        <MenuItem onClick={() => handleLinkClick('/TeacherHome')} className='link-style'>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText>Dashboard</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => handleLinkClick('/TeacherProfile')} className='link-style'>
          <ListItemIcon>
            <AccountBoxIcon />
          </ListItemIcon>
          <ListItemText>Profile Page</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => handleLinkClick('/TeacherClass')} className='link-style'>
          <ListItemIcon>
            <ClassIcon />
          </ListItemIcon>
          <ListItemText>Courses</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => handleLinkClick('/')} className='link-style'>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText>Logout</ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
  );
};

export default TeacherNavigation;
