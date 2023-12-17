import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, FormControl,MenuItem,Select,InputLabel  } from '@mui/material';
import Popup from './PopupComponent';
import axios from 'axios';


const PopupLanguageContent = () => {
    
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const [selectedLevel, setSelectedLevel] = useState('');
    const [addLanguageContent, setAddLanguageContent] = useState([])
    const [addLevelContent, setAddLevelContent] = useState([])
    
    fetchLevels().then((result) => {
        setAddLevelContent(result.data)
    })

    fetchLanguages().then((result) => {
        setAddLanguageContent(result.data)
    })


    function sendLanguage(){



        axios.post('http://localhost:3000/teacher/myProfile/addNewLanguage', {

            "languageName" : selectedLanguage,
            "level" : selectedLevel,
            "teacherid" : "e0351a27737749cb76ed"

        })

    }


    const handleLanguageChange = (event) => {
        setSelectedLanguage(event.target.value);
      };
      const handleLevelChange = (event) => {
        setSelectedLevel(event.target.value);
      };


    

    

    return (
        <Card variant="outlined" sx={{ display: 'inline-block', minWidth: 300 }}>
            <CardContent>
                <Typography variant="h5" component="div">
                Add Language
                </Typography >
                <hr/>
                <FormControl fullWidth className='margin-top-1'>
                    <InputLabel>Language</InputLabel>
                    <Select value={selectedLanguage} onChange={handleLanguageChange} label="Language">
                    {addLanguageContent.map((data, index) => (
                        <MenuItem key={index} value={data.languagename}>
                        {data.languagename}
                        </MenuItem>
                    ))}
                    </Select>
                </FormControl>
                <FormControl fullWidth className='margin-top-1'>
                    <InputLabel>Level</InputLabel>
                    <Select value={selectedLevel} onChange={handleLevelChange} label="Level">
                    {addLevelContent.map((data, index) => (
                        <MenuItem key={index} value={data.level}>
                        {data.level}
                        </MenuItem>
                    ))}
                    </Select>
                </FormControl>
                
                <Button onClick={() => sendLanguage()} > Add Language </Button>

            </CardContent>
        </Card>
    );
};


async function fetchLevels(){

    let result = await axios.get("http://localhost:3000/learner/requests/getLevels")
    return result;

} 

async function fetchLanguages(){
    let result = await axios.get("http://localhost:3000/learner/requests/getLanguages")
    return result;
}
  
export default PopupLanguageContent;