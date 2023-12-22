import React, { useState } from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import Popup from './PopupComponent';
import TeacherCourseComponentContent from './TeacherCourseComponentContent';
import axios  from 'axios';
import urlList from '../urllist'

const TeacherCourseComponent = ({ course, homework }) => {
    const { id, title, language, level, teacher, learner, registerDate, meetingDate, progress, status, feedback, description } = course;
    
    const [isPopupOpen, setPopupOpen] = useState(false);
    const openPopup = () => { setPopupOpen(true);};
    const closePopup = () => { setPopupOpen(false);};

    const closePopupAndRefresh = () => {
        setPopupOpen(false)
        window.location.reload();
      };

    return (
        <Card variant="outlined" sx={{ display: 'inline-block', minWidth: 300 }}>
            <CardContent>
                <Typography variant="h5" component="div">
                {"Couse Title IS EMPTY"}
                </Typography>
                <hr/>
                <Typography color="textSecondary" gutterBottom>
                Course ID: {course.classid}
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                Learner: {course.learname}
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                Language: {course.languagename} , {course.classlevel}
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
                <Typography color="textSecondary">{"DESCRIPTION IS EMPTY"}</Typography>
                <Button variant="contained" onClick={openPopup}>
                View
                </Button>
                <Popup open={isPopupOpen} onClose={closePopup} title={title} content={<TeacherCourseComponentContent onCloseAndRefresh={closePopupAndRefresh} course={course}/>}/>
            </CardContent>
        </Card>
    );
};
  
export default TeacherCourseComponent;