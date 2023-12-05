import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';


const CourseComponent = ({ course, onRegister }) => {
    const { id, title, language, level, teacher, learner, registerDate, meetingDate, progress, homework, status, description } = course;
    
    const handleView = () => {
       {console.log("view button clicked!");}
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
                <Button variant="contained" onClick={handleView}>
                View
                </Button>
            </CardContent>
        </Card>
    );
};
  
export default CourseComponent;