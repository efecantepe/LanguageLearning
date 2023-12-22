import React, { useEffect, useState } from 'react';
import '../Css/Chat.css';

import axios  from 'axios';
import urllist from '../urllist';

let globalUser = JSON.parse(localStorage.getItem('user'))

const ChatCenterPanel = (props) => {
    const [message, setMessage] = useState('');
    const [chatMessages, setChatMessages] = useState([]);
    const [added, setAdded] = useState(false)


    console.log("Props Equal to ", props)

    
    const [inbox_id, setInboxId] = props.inbox_id


    useEffect(() => {

      fetchMessages(props.inbox_id).then((result) => {
        
        console.log(result.data)

        setChatMessages(result.data)
        
        
      })

    }, [props.inbox_id], added)

    const handleMessageChange = (e) => {
      setMessage(e.target.value);
    };
  
    const sendMessage = () => {
        
        message_sender(props.inbox_id, message).then((result) => {
          setAdded(!added)
        } )
        
    }
  
    return (
      <div className="center-panel">
        <div className="chat-messages">
          {chatMessages.map((msg, index) => (
            <div
              key={index}
              className={`message ${msg.user_id === globalUser.id ? 'sent' : 'received'}`}
            >
              {msg.message}
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

async function fetchMessages(inbox_id){

    let obj = {
      inbox_id : inbox_id 
    }

    let sqlQuery = urllist.createQuery( "http://localhost:3000/chat/getAllMessages" ,obj)

    let result = await axios.get(sqlQuery)

    return result
}

async function message_sender(inbox_id, message ){

  let obj = {

    inbox_id : inbox_id,
    user_id : globalUser.id,
    message : message

  }

  let result = await axios.post("http://localhost:3000/chat/sendMessage", obj)

  return result
}


export default ChatCenterPanel;