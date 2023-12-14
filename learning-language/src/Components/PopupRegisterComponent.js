import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, FormControl,MenuItem,Select,InputLabel  } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Popup from './PopupComponent';


const PopupRegisterComponent = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const [selectedLevel, setSelectedLevel] = useState('');
    const [selectedTeacher, setSelectedTeacher] = useState('');

    const handleLanguageChange = (event) => {
        setSelectedLanguage(event.target.value);
      };
      const handleLevelChange = (event) => {
        setSelectedLevel(event.target.value);
      };
      const handleTeacherChange = (event) => {
        setSelectedTeacher(event.target.value);
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
      const addTeacherDataContent = [
        {teacher: 'Brixton Randall'},
        {teacher: 'Tomas Faulkner'},
        {teacher: 'Calum Bell'},
        {teacher: 'Shepard Stanley'},
        {teacher: 'Esther Hampton'},
      ];

    return (
        <Card variant="outlined" sx={{ display: 'inline-block', minWidth: 300 }}>
            <CardContent>
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
                <FormControl fullWidth className='margin-top-1'>
                    <InputLabel>Teacher</InputLabel>
                    <Select value={selectedTeacher} onChange={handleTeacherChange} label="Teacher">
                    {addTeacherDataContent.map((data, index) => (
                        <MenuItem key={index} value={data.teacher}>
                        {data.teacher}
                        </MenuItem>
                    ))}
                    </Select>
                </FormControl>
                <FormControl fullWidth className='margin-top-1'>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']} >
                        <DatePicker label="Basic date picker" />
                    </DemoContainer>
                </LocalizationProvider>
                </FormControl>
            </CardContent>
        </Card>
    );
};
  
export default PopupRegisterComponent;