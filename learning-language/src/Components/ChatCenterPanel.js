import React, { useState } from 'react';
import '../Css/Chat.css';

const ChatCenterPanel = () => {
    const [message, setMessage] = useState('');
    const [chatMessages, setChatMessages] = useState([]);
  
    const handleMessageChange = (e) => {
      setMessage(e.target.value);
    };
  
    const sendMessage = () => {
      if (message.trim() !== '') {
        const newMessage = {
          text: message,
          sender: 'You',
        };
  
        setChatMessages([...chatMessages, newMessage]);
        setMessage('');
      }
    };
  
    return (
      <div className="center-panel">
        <div className="chat-messages">
          {chatMessages.map((msg, index) => (
            <div
              key={index}
              className={`message ${msg.sender === 'You' ? 'sent' : 'received'}`}
            >
              {msg.text}
            </div>
          ))}
        </div>
        <div className="message-input">
          <input
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={handleMessageChange}
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    );
  };
export default ChatCenterPanel;
