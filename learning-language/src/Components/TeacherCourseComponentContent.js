import React, { useState } from 'react';
import { Card, CardContent, Typography, Button,Box, TextField } from '@mui/material';
import Popup from './PopupComponent';
import axios  from 'axios';
import urlList from '../urllist'
import urllist from '../urllist';


const CourseComponentContent = ({ course, onCloseAndRefresh }) => {
    //const { id, title, language, level, teacher, learner, registerDate, meetingDate, progress, homework, status, feedback, description } = course;
    const [homework, setHomeworkText] = useState('');
    const [isTextFieldLocked, setIsTextFieldLocked] = useState(false);
    const [studentSubmission, setStudentSubmission] = useState('');
    const [isFeedbackDisabled, setIsFeedbackDisabled] = useState(true);

    const handleTextChange = (e) => {
        setHomeworkText(e.target.value);
    };




    const uploadHomework = async () => {
        if (homework.trim() !== '') {
            try {
                console.log('Homework uploaded:', homework);

                console.log(course)

                let obj = {

                    classid : course.classid,
                    teacherid : course.teacherid,
                    learnerid : course.learnerid,
                    homeworksdescription : homework

                }

                axios.post("http://localhost:3000/teacher/myClasses/addHomework", obj)


                setIsTextFieldLocked(true);
            } catch (error) {
                console.error('Error uploading homework:', error);
            }
        } else {
            console.error('Homework text is empty');
        }
    };

    const deleteHomework = () => {

        let obj = {
            classid : course.classid,
        }

        axios.post("http://localhost:3000/teacher/myClasses/deleteHomework", obj)

        setHomeworkText('');
        setIsTextFieldLocked(false);
    };

    const handleSubmissionChange = (e) => {
        setStudentSubmission(e.target.value);
        setIsFeedbackDisabled(false); // Enable feedback when there is a student submission
    };

    const submitFeedback = async () => {
        if (studentSubmission.trim() !== '') {
            try {
                // Simulating the feedback submission
                console.log('Feedback submitted:', studentSubmission);
                setStudentSubmission('');
                setIsFeedbackDisabled(true);
            } catch (error) {
                console.error('Error submitting feedback:', error);
            }
        } else {
            console.error('Feedback text is empty');
        }
    };

    const renderFeedbackSection = () => {
        if (studentSubmission.trim() !== '') {
            return (
                <Typography color="textSecondary" gutterBottom>
                    <TextField
                        id="outlined-multiline-static"
                        label="Student Submission"
                        value={studentSubmission}
                        onChange={handleSubmissionChange}
                        disabled={isFeedbackDisabled}
                        fullWidth
                        multiline
                        rows={2}
                    />
                    <Button
                        variant="contained"
                        onClick={isFeedbackDisabled ? null : submitFeedback}
                    >
                        {isFeedbackDisabled ? 'Feedback Submitted' : 'Submit Feedback'}
                    </Button>
                </Typography>
            );
        }
        return null;
    };



    const renderButtons = (classid) => {
        if (course.classstatus == 'waiting') {
            return (
                <Box sx={{display: 'flex', justifyContent: 'space-between', width: '100%',}}>
                    <Button variant="contained" color='success' onClick={ () => {accept(classid);onCloseAndRefresh();}}>
                        Accept
                    </Button>
                    <Button variant="contained" color='error' onClick={() => {reject(classid);onCloseAndRefresh();}}>
                        Reject
                    </Button>
                </Box>
            );


        } else if (course.classstatus == 'active') {
            return (
                <Button variant="contained" onClick={() => cancel()}>
                    Cancel
                </Button>
            );
        }



    };

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
                Learner: {course.learnername}
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                Language: {course.languagename} , {course.classLevel}
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                Status: {course.classstatus}
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                Meeting Date: {course.classdate}
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                Registered Date: {course.classdate}
                </Typography>
                {renderButtons(course.classid)}
            </CardContent>
        </Card>
    );
};

async function accept(id){

    let course = {
        classid : id
    }

    axios.post("http://localhost:3000/teacher/myClasses/accept", course)

}   

async function reject(id){
    
    let course = {
        classid : id
    }

    axios.post("http://localhost:3000/teacher/myClasses/reject", course)

    
}

async function cancel(){
    

    console.log("Cancel")

    
    
}


  
export default CourseComponentContent;