import React, { useState} from 'react';
import { useEffect } from 'react';
import '../Css/Chat.css'; 
import { List, ListItem, ListItemText, Divider,Avatar,Typography, FormControl,MenuItem,Select,InputLabel,Button } from '@mui/material';
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

const LeftPanel = (props) => {

  function handleClick(inbox_id){

    //console.log(inbox_id)
    props.parentLeftPanelCallBack(inbox_id)

  }

  const [inbox, setInboxes] = useState([])
  
  useEffect(() => {

    fetchInboxes().then((result) => {
      
      console.log(" LEFT PANEL RESULT !!!!!", result)
      setInboxes(result.data)
      
    })

  }, [])

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
        {inbox.map((chat) => (
          <React.Fragment key={chat.inbox_id}>
            <ListItem onClick={() => handleClick(chat.inbox_id)} button>
              <Avatar sx={{color:'MintCream', bgcolor: getColorForLetter('a') }}> {"a"} </Avatar>
              <ListItemText primary={"Efe"} secondary={"Hasan"} sx={{ paddingLeft: 2 }} />
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
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

    
    function a(){

        if(selectedLanguage === '' || selectedMinLevel === '' || selectedMaxLevel === ''){
          setIsDisabled(true)
      }

      else{
          setIsDisabled(false)
          fetchPeople(selectedLanguage, selectedMinLevel, selectedMaxLevel).then((result) => {

              console.log(result)

              result.data.map((index, key) => {
                  console.log(index , "    ", key)
              })

              if(result.data.length !== 0){

                  console.log("ASJKDHASD RESULT DATA IS", result.data)


                  setTeachers(result.data)
              }
          })
      }


    }


    const [selectedLanguage, setSelectedLanguage] = useState('');
    const [selectedMinLevel, setSelectedMinLevel] = useState('');
    const [selectedMaxLevel, setSelectedMaxLevel] = useState('');
    const [isDisabled, setIsDisabled] = useState(true);
    const [teachers, setTeachers] = useState([])
    const [languages, setLanguages] = useState([])
    const [levels, setLevels] = useState([])
    
    useEffect(() => {

        if(selectedLanguage === '' || selectedMinLevel === '' || selectedMaxLevel === ''){
            setIsDisabled(true)
        }

        else{
            setIsDisabled(false)
            fetchPeople(selectedLanguage, selectedMinLevel, selectedMaxLevel).then((result) => {

                console.log(result)

                result.data.map((index, key) => {
                    console.log(index , "    ", key)
                })

                if(result.data.length !== 0){

                    console.log("ASJKDHASD RESULT DATA IS", result.data)


                    setTeachers(result.data)
                }
            })
        }

    }, [])


    
    fetchLanguages().then((result => {
        setLanguages(result.data)
    }))

    fetchLevels().then((result) => {
        setLevels(result.data)
    })

    const handleLanguageChange = (event) => {
        setSelectedLanguage(event.target.value);
    };
    
    const handleMinLevelChange = (event) => {
        setSelectedMinLevel(event.target.value);
    };

    const handleMaxLevelChange = (event) => {
        setSelectedMaxLevel(event.target.value)
    }

    const getColorForUserType = (userType) => {
      return userType === 'teacher' ? 'green' : 'red';
    };

  return (
    <div className="right-panel">
      <Typography variant="h6" gutterBottom>
        People List
      </Typography>
      <FormControl fullWidth className='margin-top-1'>
        <InputLabel>Language</InputLabel>
        <Select value={selectedLanguage} onChange={handleLanguageChange} label="Language">
        {languages.map((data, index) => (
            <MenuItem key={index} value={data.languagename}>
            {data.languagename}
            </MenuItem>
        ))}
        </Select>
    </FormControl>
    <FormControl fullWidth className='margin-top-1'>  
        <InputLabel>Min Level</InputLabel>
        <Select value={selectedMinLevel} onChange={handleMinLevelChange} label="Min Level">
        {levels.map((data, index) => (
            <MenuItem key={index} value={data.level}>
            {data.level}
            </MenuItem>
        ))}
        </Select>
    </FormControl>
    
    <FormControl fullWidth className='margin-top-1'>  
        <InputLabel>Max Level</InputLabel>
        <Select value={selectedMaxLevel} onChange={handleMaxLevelChange} label="Max Level">
        {levels.map((data, index) => (
            <MenuItem key={index} value={data.level}>
            {data.level}
            </MenuItem>
        ))}
        </Select>
    </FormControl>
    <div style={{ textAlign: 'right' }}>
      <Button onClick={a} variant="contained"className='margin-top-1'>
        Search
      </Button>
    </div>
      <List>
        {teachers.map((person) => (
          <React.Fragment key={person.teacherid}>
          <ListItem onClick={() => addContact(person.teacherid)}  button sx={{backgroundColor:getColorForUserType(person.user_type)}}>
          <Avatar sx={{color:'MintCream', bgcolor: getColorForLetter(person.teachername.charAt(0)) }}> {person.teachername.charAt(0)} </Avatar>
            <ListItemText primary={person.teachername} sx={{ paddingLeft: 2 }} />
          </ListItem>
          <Divider />
        </React.Fragment>
        ))}
      </List>
    </div>
  );

  async function fetchLevels(){
    let result = await axios.get("http://localhost:3000/learner/requests/getLevels")
    return result;
} 

async function fetchLanguages(){
    let result = await axios.get("http://localhost:3000/learner/requests/getLanguages")
    return result;
}

async function fetchTeachers(languageName, minLevel, maxLevel){
    console.log(languageName, "   " ,minLevel, "   "  ,maxLevel)

    let obj = {

        'languageName' : languageName,
        'minLevel' : minLevel,
        'maxLevel' : maxLevel

    }
    let url = urllist.createQuery("http://localhost:3000/learner/requests/getTeachers", obj)
    let result = await axios.get(url) 
    return result;
}
};

const ChatPanel = () => {

  const [message, setMessages] = useState([])
  const [inbox, setInboxes] = useState([])
  const [chatMessages, setChatMessages] = useState([]);
  const [inbox_id, setInboxId] = useState("00000000")
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

  
  function setInboxIdLeftPanel(inbox_id){
    setInboxId(inbox_id)

    console.log("NEW ", inbox_id)
  }


  return (
    <div className="chat-grid">
      <LeftPanel parentLeftPanelCallBack = { (inbox_id) => setInboxIdLeftPanel(inbox_id)}/>
      <ChatCenterPanel parentLeftPanelCallBack = {(inbox_id) => setInboxIdLeftPanel(inbox_id)} inbox_id = {inbox_id} ></ChatCenterPanel>
      <RightPanel peope = {people} />
    </div>
  );
};

async function fetchInboxes(){

  let id = globalUser.id
  
  let values = {

    "id" : id

  }

  let url = urllist.createQuery("http://localhost:3000/chat/myInboxes", values)

  console.log(url)

  let result = await axios.get(url)

  return result

}

/*
async function fetchPeople(minLevel, maxLevel, language){



  let obj = {

    minLevel: minLevel,
    maxLevel : maxLevel,
    language : language

  }

  let result = await axios.post("http://localhost:3000/chat/getAllMessages", obj)

  return result

}
*/

async function sendMessage(){




}

async function fetchMessages(inbox_id){

  let values = [inbox_id,]

  let url = urllist.createQuery("http://localhost:3000/chat/getAllMessages")

  let result = await axios.get(url)

  return result

}

async function fetchPeople(languageName, minLevel, maxLevel){
  console.log(languageName, "   " ,minLevel, "   "  ,maxLevel)

  let obj = {

      'languageName' : languageName,
      'minLevel' : minLevel,
      'maxLevel' : maxLevel

  }
  let url = urllist.createQuery("http://localhost:3000/chat/getPeople", obj)
  let result = await axios.get(url)
  
  console.log("Fetch People ", result)

  return result;
}

function addContact(person){

  console.log("Person is ", person)

  let obj = {

    user1 : globalUser.id,
    user2 : person

  }

  axios.post("http://localhost:3000/chat/createInbox", obj)

}



export default ChatPanel;
