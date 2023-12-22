import React, { useState } from 'react';
import { Card, CardContent, Typography, Button,Slider,Box  } from '@mui/material';
import Popup from './PopupComponent';

const TeacherHomeworkContent = ({ homework }) => {

        const [grade, setGrade] = React.useState(50); // Initial grade value
      
        const handleChange = (event, newValue) => {
          if (typeof newValue === 'number') {
            setGrade(newValue);
          }
        };
      
        const mapGradeToValue = (grade) => {
          // Map the grade (0-100) to the slider's value (0-100)
          return grade;
        };
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

                <Box sx={{ width: 250 }}>
      <Typography id="grade-slider" gutterBottom>
        Grade: {grade}
      </Typography>
      <Slider
        value={grade}
        min={0}
        step={1}
        max={100}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="grade-slider"
      />
    </Box>
                <Button variant="contained">
                Give Grade
                </Button>

            </CardContent>
        </Card>
    );
};
  
export default TeacherHomeworkContent;