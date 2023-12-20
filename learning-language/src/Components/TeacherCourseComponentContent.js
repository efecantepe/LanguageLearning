import React, { useState } from 'react';
import { Card, CardContent, Typography, Button,Box } from '@mui/material';
import Popup from './PopupComponent';
import axios  from 'axios';
import urlList from '../urllist'


const CourseComponentContent = ({ course, action, onAccept,onReject,onCancel }) => {
    //const { id, title, language, level, teacher, learner, registerDate, meetingDate, progress, homework, status, feedback, description } = course;
    const [homeworkFile, setHomeworkFile] = useState(null);
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setHomeworkFile(file);
    };

    const uploadHomework = async () => {
        if (homeworkFile) {
            const formData = new FormData();
            formData.append('homework', homeworkFile);

            try {
                const response = await axios.post('YOUR_UPLOAD_ENDPOINT', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                // Handle response or perform necessary actions after successful upload
                console.log('Homework uploaded:', response.data);
            } catch (error) {
                // Handle error during upload
                console.error('Error uploading homework:', error);
            }
        } else {
            console.error('No file selected');
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
                <input type="file" onChange={handleFileChange} />
                    <Button variant="contained" onClick={uploadHomework}>
                        Upload Homework
                    </Button>

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