import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemText, Divider,Avatar,Typography, FormControl,MenuItem,Select,InputLabel } from '@mui/material';
import '../Css/Chat.css';
import ChatCenterPanel from '../Components/ChatCenterPanel';
import axios  from 'axios';
import urllist from '../urllist';

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
            fetchTeachers(selectedLanguage, selectedMinLevel, selectedMaxLevel).then((result) => {
                result.data.map((index, key) => {
                    console.log(index , "    ", key)
                })

                if(result.data.length !== 0){
                    setTeachers(result.data)
                }
            })
        }

    }, [selectedLanguage, selectedMinLevel, selectedMaxLevel])


    
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
  return (
    <div className="chat-grid">
      <LeftPanel />
      <CenterPanel />
      <RightPanel />
    </div>
  );
};

export default ChatPanel;
