import React, { useState } from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import Popup from './PopupComponent';
import CourseComponentContent from './CourseComponentContent';


const CourseComponent = ({ course, onRegister }) => {
    
    /* 
        !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        Alperern Bu sekilde yapma kanka
        !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

        //const { id, title, language, level, teacher, learner, registerDate, meetingDate, progress, homework, status, description } = course;

        course.learnerid seklinde yap

        sira degisebiliyor

    */

    //const { id, title, language, level, teacher, learner, registerDate, meetingDate, progress, homework, status, description } = course;
    
    const [isPopupOpen, setPopupOpen] = useState(false);
    const openPopup = () => { setPopupOpen(true);};
    const closePopup = () => { setPopupOpen(false);};

    const handleAction = () => {
        console.log('Action performed within the popup');
        closePopup();
    };
    return (
        <Card variant="outlined" sx={{ display: 'inline-block', minWidth: 300 }}>
            <CardContent>
                <Typography variant="h5" component="div">
                {"Something"}
                </Typography>
                <hr/>
                <Typography color="textSecondary" gutterBottom>
                Course ID: {course.classid}
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                Teacher: {course.teachername}
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                Language: {course.languagename} - {course.classlevel}
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                Status: {course.classstatus}
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                Meeting Date: {course.classdate}
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                Progress: {"100%"}
                </Typography>
                <Typography color="textSecondary">{"Something"}</Typography>
                <Button variant="contained" onClick={openPopup}>
                View
                </Button>
                <Popup open={isPopupOpen} onClose={closePopup} title={"AJSKDH"} content={<CourseComponentContent course={course}/>} actionText="Perform Action" onAction={handleAction}/>
            </CardContent>
        </Card>
    );
};
  
export default CourseComponent;