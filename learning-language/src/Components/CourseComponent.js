import React, { useState } from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import Popup from './PopupComponent';


const CourseComponent = ({ course, onRegister }) => {
    const { id, title, language, level, teacher, learner, registerDate, meetingDate, progress, homework, status, description } = course;
    
    const [isPopupOpen, setPopupOpen] = useState(false);

    const handleView = () => {
       {console.log("view button clicked!");}
    };
    const openPopup = () => {
        setPopupOpen(true);
    };

    const closePopup = () => {
        setPopupOpen(false);
    };

    const handleAction = () => {
        console.log('Action performed within the popup');
        closePopup();
    };
    return (
        <Card variant="outlined" sx={{ display: 'inline-block', minWidth: 300 }}>
            <CardContent>
                <Typography variant="h5" component="div">
                {title}
                </Typography>
                <hr/>
                <Typography color="textSecondary" gutterBottom>
                Course ID: {id}
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                Teacher: {teacher}
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                Language: {language}, {level}
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                Status: {status}
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                Meeting Date: {meetingDate}
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                Progress: {progress}
                </Typography>
                <Typography color="textSecondary">{description}</Typography>
                <Button variant="contained" onClick={openPopup}>
                View
                </Button>
                <Popup open={isPopupOpen} onClose={closePopup} title="Popup Title" content="This is the content of the popup." actionText="Perform Action" onAction={handleAction}/>
            </CardContent>
        </Card>
    );
};
  
export default CourseComponent;