import React, { useState } from 'react';
import { Card, CardContent, Typography, Button,Box } from '@mui/material';
import Popup from './PopupComponent';


const CourseComponentContent = ({ course, action,onAccept,onReject,onCancel }) => {
    const { id, title, language, level, teacher, learner, registerDate, meetingDate, progress, homework, status, feedback, description } = course;

    const renderButtons = () => {
        if (course.status == 'Waiting') {
            return (
                <Box sx={{display: 'flex', justifyContent: 'space-between', width: '100%',}}>
                    <Button variant="contained" color='success' onClick={onAccept}>
                        Accept
                    </Button>
                    <Button variant="contained" color='error' onClick={onReject}>
                        Reject
                    </Button>
                </Box>
            );
        } else if (course.status == 'Active') {
            return (
                <Button variant="contained" onClick={onCancel}>
                    Cancel
                </Button>
            );
        }
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
                Learner: {learner}
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
                <Typography color="textSecondary" gutterBottom>
                Registered Date: {registerDate}
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                Homework: {homework}
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                Feedback: {feedback}
                </Typography>
                <Typography color="textSecondary">{description}</Typography>
                {renderButtons()}
            </CardContent>
        </Card>
    );
};
  
export default CourseComponentContent;