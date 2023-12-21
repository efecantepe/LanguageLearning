import React, { useState } from 'react';
import { Card, CardContent, Typography, Button,Box, TextField } from '@mui/material';
import Popup from './PopupComponent';
import axios  from 'axios';
import urlList from '../urllist'


const CourseComponentContent = ({ course, action, onAccept,onReject,onCancel }) => {
    //const { id, title, language, level, teacher, learner, registerDate, meetingDate, progress, homework, status, feedback, description } = course;
    const [homeworkText, setHomeworkText] = useState('');
    const [isTextFieldLocked, setIsTextFieldLocked] = useState(false);

    const handleTextChange = (e) => {
        setHomeworkText(e.target.value);
    };

    const uploadHomework = async () => {
        if (homeworkText.trim() !== '') {
            const homeworkData = {
                classId: course.classid,
                homeworkText: homeworkText,
            };

            try {
                const response = await axios.post('YOUR_UPLOAD_ENDPOINT', homeworkData);
                console.log('Homework uploaded:', response.data);
                setHomeworkText(''); // Reset the text field after successful upload
                setIsTextFieldLocked(true); // Lock the TextField after uploading
            } catch (error) {
                console.error('Error uploading homework:', error);
            }
        } else {
            console.error('Homework text is empty');
        }
    };


    const renderButtons = (classid) => {
        if (course.classstatus == 'waiting') {
            return (
                <Box sx={{display: 'flex', justifyContent: 'space-between', width: '100%',}}>
                    <Button variant="contained" color='success' onClick={ () => accept(classid)}>
                        Accept
                    </Button>
                    <Button variant="contained" color='error' onClick={() => reject(classid)}>
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
                <Typography variant="h5" component="div">
                {"S"}
                </Typography>
                <hr/>
                <Typography color="textSecondary" gutterBottom>
                Course ID: {course.classid}
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                Teacher: {"Eylol Bedem"}
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
                Progress: {"100%"}
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                Registered Date: {course.classdate}
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                <TextField id="outlined-multiline-static" label="Homework" value={homeworkText} onChange={handleTextChange} disabled={isTextFieldLocked} fullWidth multiline rows={4} />
                <Button variant="contained" onClick={uploadHomework}>Upload Homework</Button>
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                Feedback: {"Feedback"}
                </Typography>
                <Typography color="textSecondary">{"SAD"}</Typography>
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