import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Button, FormControl,MenuItem,Select,InputLabel, useStepContext  } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import axios  from 'axios';
import Popup from './PopupComponent';
import Slider from 'react-slider'
import 'rc-slider/assets/index.css'

import urllist from '../urllist';


const PopupRegisterComponent = () => {

    const [isDisabled, setIsDisabled] = useState(true);

    const [selectedLanguage, setSelectedLanguage] = useState('');
    const [selectedMinLevel, setSelectedMinLevel] = useState('');
    const [selectedMaxLevel, setSelectedMaxLevel] = useState('');
    const [selectedTeacher, setSelectedTeacher] = useState('');
    const [selectedDate, setSelectedDate] = useState();

    const [languages, setLanguages] = useState([])
    const [levels, setLevels] = useState([])
    const [teachers, setTeachers] = useState([])
    
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

        console.log("Hello World")

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
      
    const handleTeacherChange = (event) => {
        setSelectedTeacher(event.target.value);
    };

    const handleDateChange = (date) => {
        setSelectedDate(date)
    }


    
    /*
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
      */

    return (
        <Card variant="outlined" sx={{ display: 'inline-block', minWidth: 300 }}>
            <CardContent>
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

                <FormControl fullWidth className='margin-top-1'>
                    <InputLabel>Teacher</InputLabel>
                    <Select defaultValue='' disabled = {isDisabled} value={selectedTeacher} onChange={handleTeacherChange} label="Teacher">
                    
                    {   
                        teachers.map((data, index) => (
                            <MenuItem key={index} value= {data.teachername + " " + data.surname}  >
                                {data.teachername} {data.surname}
                            </MenuItem>
                        ))
                
                    }


                    </Select>

                    
                </FormControl>
                <FormControl fullWidth className='margin-top-1'>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']} >
                        <DatePicker value={selectedDate} onChange={handleDateChange} label="Basic date picker" />
                    </DemoContainer>
                </LocalizationProvider>
                </FormControl>
            </CardContent>

            <Button onClick={() => handleClick(selectedLanguage, selectedMinLevel, selectedMaxLevel, selectedTeacher, selectedDate)}> Add Course </Button>
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




export default PopupRegisterComponent;


function handleClick(languages, selectedMinLevel , selectedMaxLevel , teachers, date){

    console.log("Languages" , languages)
    console.log("Min Level" , selectedMinLevel)
    console.log("Max Level" , selectedMaxLevel)
    console.log("Teachers" , teachers)
    console.log("Date is", date.$d)

}