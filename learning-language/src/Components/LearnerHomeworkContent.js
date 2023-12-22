import React, { useState } from 'react';
import { Card, CardContent, Typography, Button,Slider,Box,TextField  } from '@mui/material';
import Popup from './PopupComponent';
import axios  from 'axios';


const LearnerHomeworkContent = ({ homework }) => {

    const [submissionText, setSubmissionText] = useState('');

    const handleSubmission = () => {

        let obj = {

            homeworkid : homework.homework_id,
            submission : submissionText
        }

        axios.post("http://localhost:3000/learner/myClasses/submit", obj)


        console.log('Submitted:', submissionText);
    };

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
                <TextField
                    label="Enter Submission"
                    variant="outlined"
                    value={submissionText}
                    onChange={(e) => setSubmissionText(e.target.value)}
                    fullWidth
                    multiline
                    rows={2}
                    margin="normal"
                />
                <Button variant="contained" onClick={handleSubmission}>
                Submit
                </Button>

            </CardContent>
        </Card>
    );
};
  
export default LearnerHomeworkContent;