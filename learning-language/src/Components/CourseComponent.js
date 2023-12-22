import React, { useState } from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import Popup from './PopupComponent';
import CourseComponentContent from './CourseComponentContent';


const CourseComponent = ({ course, onRegister }) => {

    
    const [isPopupOpen, setPopupOpen] = useState(false);
    const openPopup = () => { setPopupOpen(true);};
    const closePopup = () => { setPopupOpen(false);};

    return (
        <Card variant="outlined" sx={{ display: 'inline-block', minWidth: 300 }}>
            <CardContent>
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
                Meeting Date: {course.classdate}
                </Typography>
                <Button variant="contained" onClick={openPopup}>
                View
                </Button>
                <Popup open={isPopupOpen} onClose={closePopup} title={'My Course'} content={<CourseComponentContent course={course}/>}/>
            </CardContent>
        </Card>
    );
};
  
export default CourseComponent;