import React, { useState } from 'react';
import { Card, CardContent, Typography, Button,Slider,Box  } from '@mui/material';
import Popup from './PopupComponent';
import axios  from 'axios';

const TeacherHomeworkContent = ({ homework }) => {

        const [grade, setGrade] = React.useState(50);
      
        const handleChange = (event, newValue) => {
          if (typeof newValue === 'number') {
            setGrade(newValue);
          }
        };

        function handleClick(){

          console.log(homework)

          let obj = {
            point : grade,
            homeworkid : homework.homework_id
          }

          axios.post("http://localhost:3000/teacher/myClasses/updatePoint", obj)  

        }

      
        const mapGradeToValue = (grade) => {
          return grade;
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
                <Typography color="textSecondary" gutterBottom>
                Submission: {homework.submission}
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
                <Button onClick={handleClick} variant="contained">
                Give Grade
                </Button>

            </CardContent>
        </Card>
    );
};
  
export default TeacherHomeworkContent;