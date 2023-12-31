import React from 'react';
import { useNavigate } from 'react-router-dom';
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
import ChatIcon from '@mui/icons-material/Chat';

const NavigationBar = () => {
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    navigate(path);
    window.location.reload();
  };

  return (
    <Paper sx={{ width: 256, maxWidth: '100%' }}>
      <MenuList>
        <MenuItem onClick={() => handleLinkClick('/home')} className='link-style'>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText>Dashboard</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => handleLinkClick('/profile')} className='link-style'>
          <ListItemIcon>
            <AccountBoxIcon />
          </ListItemIcon>
          <ListItemText>Profile Page</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => handleLinkClick('/courses')} className='link-style'>
          <ListItemIcon>
            <ClassIcon />
          </ListItemIcon>
          <ListItemText>Courses</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => handleLinkClick('/Homework')} className='link-style'>
          <ListItemIcon>
            <ClassIcon />
          </ListItemIcon>
          <ListItemText>Homework</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => handleLinkClick('/chat')} className='link-style'>
          <ListItemIcon>
            <ChatIcon />
          </ListItemIcon>
          <ListItemText>Chat</ListItemText>
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

export default NavigationBar;
