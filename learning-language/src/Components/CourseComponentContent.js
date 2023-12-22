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
                Course ID: {course.classid}
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                Teacher: {course.teachername}
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                Language: {course.languagename}, {course.classlevel}
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                Meeting Date: {course.classdate}
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                Registered Date: {course.creationtime}
                </Typography>

            </CardContent>
        </Card>
    );
};
  
export default CourseComponentContent;