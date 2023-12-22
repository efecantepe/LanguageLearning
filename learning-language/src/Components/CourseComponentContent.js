import React, { useState } from 'react';
import { Card, CardContent, Typography, Button,TextField } from '@mui/material';
import Popup from './PopupComponent';


const CourseComponentContent = ({ course, action }) => {
    const { id, title, language, level, teacher, learner, registerDate, meetingDate, progress, homework, status, grade,  } = course;

    const [submissionText, setSubmissionText] = useState('');

    const handleSubmissionChange = (e) => {
        setSubmissionText(e.target.value);
    };

  const handleSubmission = () => {
    console.log('Submitting:', submissionText);
  }

    return (
        <Card variant="outlined" sx={{ display: 'inline-block', minWidth: 300 }}>
            <CardContent>
                <Typography variant="h5" component="div">
                {title}
                </Typography>
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
                Registered Date: {registerDate}
                </Typography>

            </CardContent>
        </Card>
    );
};
  
export default CourseComponentContent;