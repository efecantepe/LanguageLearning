import React from 'react';
import '../Css/Chat.css'; 
import ChatCenterPanel from '../Components/ChatCenterPanel';

const LeftPanel = () => {
  return (
    <div className="left-panel">
      <h2>Previous Messages</h2>
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
