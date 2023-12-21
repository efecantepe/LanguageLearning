import React, { useState } from 'react';
import '../Css/Chat.css'; 
import ChatCenterPanel from '../Components/ChatCenterPanel';
import urllist from '../urllist';
import axios  from 'axios';

let globalUser = JSON.parse(localStorage.getItem('user'))

const LeftPanel = () => {

  const [inbox, setInboxes] = useState([])
  /*
  fetchInboxes().then((result) => {
    setInboxes(result)
  })
  */

  return (
    <div className="left-panel">
      <h2>Previous Messages</h2>
    </div>
  );
};

const CenterPanel = () => {

  const [messages, setMessages] = useState([])

  

  

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

async function fetchInboxes(){

  let id = globalUser.id
  
  let values = [id]

  let url = urllist.createQuery("http://localhost:3000/chat/myInboxes", values)

  
  let result = await axios.get(url)

  return result

}


async function fetchPeople(minLevel, maxLevel, language){

  let obj = {

    minLevel: minLevel,
    maxLevel : maxLevel,
    language : language

  }

  let result = await axios.post("http://localhost:3000/chat/getAllMessages", obj)

  return result

}

async function sendMessage(){




}


export default ChatPanel;
