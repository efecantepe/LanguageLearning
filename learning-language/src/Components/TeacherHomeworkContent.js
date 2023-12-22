import React, { useState } from 'react';
import { Card, CardContent, Typography, Button,Slider  } from '@mui/material';
import Popup from './PopupComponent';


const TeacherHomeworkContent = ({ homework }) => {

    export default function NonLinearSlider() {
        const [grade, setGrade] = React.useState(10);
      
        const handleGrade = (event, newValue) => {
          if (typeof newValue === 'number') {
            setValue(newValue);
          }
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
                    <Typography id="non-linear-slider" gutterBottom>
                        Storage: {valueLabelFormat(calculateValue(value))}
                    </Typography>
                    <Slider
                        value={grade}
                        min={5}
                        step={1}
                        max={30}
                        scale={calculateValue}
                        getAriaValueText={valueLabelFormat}
                        valueLabelFormat={valueLabelFormat}
                        onChange={handleGrade}
                        valueLabelDisplay="auto"
                        aria-labelledby="non-linear-slider"
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