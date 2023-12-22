import React, { useState } from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import Popup from './PopupComponent';
import LearnerHomeworkContent from './LearnerHomeworkContent';


const LearnerHomework = ({ homework }) => {

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
                Teacher: {homework.teacherid}
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                Learner: {homework.learnerid}
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                Homework: {homework.homeworkdescription}
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                Submission: {homework.submission}
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                Grade: {homework.point}
                </Typography>
                <Button variant="contained" onClick={openPopup}>
                View
                </Button>
                <Popup open={isPopupOpen} onClose={closePopup} content={<LearnerHomeworkContent homework={homework}/>}/>
            </CardContent>
        </Card>
    );
};
  
export default LearnerHomework;