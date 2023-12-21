import React from 'react';
import { List, ListItem, ListItemText, Typography, Divider,Avatar } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import '../Css/Chat.css';
import ChatCenterPanel from '../Components/ChatCenterPanel';

const previousChats = [
  { id: 1, name: 'Eylul', lastMessage: 'Last message in Chat 1' },
  { id: 2, name: 'Alperen', lastMessage: 'Last message in Chat 2' },
];

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const LeftPanel = () => {
  return (
    <div className="left-panel">
      <Typography variant="h6" gutterBottom>
        Previous Messages
      </Typography>
      <List>
        {previousChats.map((chat) => (
          <React.Fragment key={chat.id}>
            <ListItem button>
              <Avatar sx={{ bgcolor: getRandomColor() }}> {chat.name.charAt(0)} </Avatar>
              <ListItemText primary={chat.name} secondary={chat.lastMessage} sx={{paddingLeft:2}}/>
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </div>
  );
};

const CenterPanel = () => {
  return (
    <div className="center-panel">
      <h2>Active Chat</h2>
      <ChatCenterPanel/>
    </div>
  );
};

const RightPanel = () => {
  return (
    <div className="right-panel">
      <h2>People List</h2>
    </div>
  );
};

const ChatPanel = () => {
  return (
    <div className="chat-grid">
      <LeftPanel />
      <CenterPanel />
      <RightPanel />
    </div>
  );
};

export default ChatPanel;
