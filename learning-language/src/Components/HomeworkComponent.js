import React, { useState } from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import Popup from './PopupComponent';
import TeacherHomeworkContent from './TeacherHomeworkContent'


const HomeworkComponent = ({ homework }) => {

    console.log("Homework is ", homework)

    
    const [isPopupOpen, setPopupOpen] = useState(false);
    const openPopup = () => { setPopupOpen(true);};
    const closePopup = () => { setPopupOpen(false);};

    return (
        <Card variant="outlined" sx={{ display: 'inline-block', minWidth: 300 }}>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                Course ID: {homework.classid}
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                Teacher: {homework.teachername}
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                Learner: {homework.learnername}
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                Homework: {homework.homeworktext}
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                Submission: {homework.submission}
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                Grade: {homework.grade}
                </Typography>
                <Button variant="contained">
                View
                </Button>
                <Popup open={isPopupOpen} onClose={closePopup} content={<TeacherHomeworkContent homework={homework}/>}/>
            </CardContent>
        </Card>
    );
};
  
export default HomeworkComponent;