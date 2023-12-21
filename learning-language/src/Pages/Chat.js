import React, { useState} from 'react';
import { useEffect } from 'react';
import '../Css/Chat.css'; 
import ChatCenterPanel from '../Components/ChatCenterPanel';
import urllist from '../urllist';
import axios  from 'axios';

let globalUser = JSON.parse(localStorage.getItem('user'))




const previousChats = [
  { id: 1, name: 'Eylul', lastMessage: 'Last message in Chat 1' },
  { id: 2, name: 'Alperen', lastMessage: 'Last message in Chat 2' },
  { id: 3, name: 'Efe', lastMessage: 'Last message in Chat 2' },
];

const peopleList = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
  { id: 3, name: 'Michael Johnson' },
];

const getColorForLetter = (letter) => {
  const colorMap = {
    A: '#FFD1DC', B: '#FFD1B3', C: '#FFE6B3', D: '#FFF5B3', E: '#F3FFB3', F: '#D1FFB3',
    G: '#B3FFC4', H: '#B3FFE6', I: '#B3FFFF', J: '#B3EDFF', K: '#B3D1FF', L: '#CBB3FF',
    M: '#E6B3FF', N: '#FFB3FF', O: '#FFB3E6', P: '#FFB3D1', Q: '#FFCBB3', R: '#FFE6B3',
    S: '#FFFFB3', T: '#EDFFB3', U: '#D1FFB3', V: '#B3FFCB', W: '#B3FFE6', X: '#B3FFFF',
    Y: '#B3EDFF', Z: '#B3D1FF',
  };
  return colorMap[letter.toUpperCase()] || '#CCCCCC'; // Default color if letter not found
};

const LeftPanel = () => {

  const [inbox, setInboxes] = useState([])
  

  /*
  fetchInboxes().then((result) => {
    setInboxes(result)
  })
  */

  return (
    <div className="left-panel">
      <Typography variant="h6" gutterBottom>
        Previous Messages
      </Typography>
      <List>
        {previousChats.map((chat) => (
          <React.Fragment key={chat.id}>
            <ListItem button>
              <Avatar sx={{color:'MintCream', bgcolor: getColorForLetter(chat.name.charAt(0)) }}> {chat.name.charAt(0)} </Avatar>
              <ListItemText primary={chat.name} secondary={chat.lastMessage} sx={{ paddingLeft: 2 }} />
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
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
      <List>
        {peopleList.map((person) => (
          <React.Fragment key={person.id}>
          <ListItem button>
          <Avatar sx={{color:'MintCream', bgcolor: getColorForLetter(person.name.charAt(0)) }}> {person.name.charAt(0)} </Avatar>
            <ListItemText primary={person.name} sx={{ paddingLeft: 2 }} />
          </ListItem>
          <Divider />
        </React.Fragment>
        ))}
      </List>
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
