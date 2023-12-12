import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, FormControl,MenuItem,Select,InputLabel  } from '@mui/material';
import Popup from './PopupComponent';


const PopupLanguageContent = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const [selectedLevel, setSelectedLevel] = useState('');

    const handleLanguageChange = (event) => {
        setSelectedLanguage(event.target.value);
      };
      const handleLevelChange = (event) => {
        setSelectedLevel(event.target.value);
      };

    const addLanguageDataContent = [
        {language: 'English'},
        {language: 'French'},
        {language: 'Spanish'},
        {language: 'Turkish'},
      ];
      const addLevelDataContent = [
        {level: 'A1'},
        {level: 'A2'},
        {level: 'B1'},
        {level: 'B2'},
        {level: 'C1'},
        {level: 'C2'},
      ];

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
                    {addLanguageDataContent.map((data, index) => (
                        <MenuItem key={index} value={data.language}>
                        {data.language}
                        </MenuItem>
                    ))}
                    </Select>
                </FormControl>
                <FormControl fullWidth className='margin-top-1'>
                    <InputLabel>Level</InputLabel>
                    <Select value={selectedLevel} onChange={handleLevelChange} label="Level">
                    {addLevelDataContent.map((data, index) => (
                        <MenuItem key={index} value={data.level}>
                        {data.level}
                        </MenuItem>
                    ))}
                    </Select>
                </FormControl>
                <FormControl className='margin-top-1'>
                    <Button>Add Language</Button>
                </FormControl>
            </CardContent>
        </Card>
    );
};
  
export default PopupLanguageContent;