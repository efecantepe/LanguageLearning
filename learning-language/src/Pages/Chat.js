import React, { useState} from 'react';
import { useEffect } from 'react';
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

const CenterPanel = (message, chatMessages, inbox_id) => {

  console.log(message)
  console.log(chatMessages)
  console.log(inbox_id)

  return (
    <div className="center-panel">
      <h2>Active Chat</h2>
      <ChatCenterPanel message = {message}/>
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

  const [message, setMessages] = useState([])
  const [inbox, setInboxes] = useState([])
  const [chatMessages, setChatMessages] = useState([]);
  const [inbox_id, setInboxId] = useState()
  const [people, setPeople] = useState()


  useEffect(() => {

    fetchInboxes().then((result) => {
    
      console.log(result)
      
      setInboxes(result)
    })

  }, [])


 

  /*
  fetchMessages("f10f36a6").then((result) => {
    
    console.log(result)
    
    setChatMessages(result)
  })
  */

  



  return (
    <div className="chat-grid">
      <LeftPanel inbox = {inbox} />
      <RightPanel peope = {people} />
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

async function fetchMessages(inbox_id){

  let values = [inbox_id,]

  let url = urllist.createQuery("http://localhost:3000/chat/getAllMessages")

  let result = await axios.get(url)

  return result

}


export default ChatPanel;
