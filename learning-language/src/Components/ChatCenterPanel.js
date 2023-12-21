import React, { useState } from 'react';
import '../Css/Chat.css';

import urllist from '../urllist';
import axios  from 'axios';

let globalUser = JSON.parse(localStorage.getItem('user'))

const ChatCenterPanel = (message, chatMessages ,inbox_id) => {
    


    /*
    fetchMessages().then((result) => {

      setChatMessages(result)
  
    })
    */


    const handleMessageChange = (e) => {
      //setMessage(e.target.value);
    };
  
    const sendMessage = () => {
      if(message.trim() !== '') {
        

        send_message(message, inbox_id);
        
        
        //setMessage('');
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

  async function send_message(message, inbox_id){

    let obj = {

      'inbox_id' : inbox_id,
      'user_id' : globalUser.id,
      'message' : message

    }

    

  }

export default ChatCenterPanel;
