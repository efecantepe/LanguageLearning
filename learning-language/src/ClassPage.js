import React, { useState } from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import CourseComponent from './Components/CourseComponent';


const activeCoursesData = [
    {id: 1, title: 'Sample Course', teacher: 'Alex Hale', language: 'English', level: 'A1', status: 'Active', progress: '%20', meetingDate: '01.01.2023', description: 'Description for the sample course.'},
    {id: 2, title: 'Sample Course', teacher: 'Alex Hale', language: 'English', level: 'A1', status: 'Active', progress: '%20', meetingDate: '01.01.2023', description: 'Description for the sample course.'}
];

const finishedCoursesData = [
    {id: 3, title: 'Sample Course', teacher: 'Alex Hale', language: 'English', level: 'A1', status: 'Active', progress: '%20', meetingDate: '01.01.2023', description: 'Description for the sample course.'},
    {id: 4, title: 'Sample Course', teacher: 'Alex Hale', language: 'English', level: 'A1', status: 'Active', progress: '%20', meetingDate: '01.01.2023', description: 'Description for the sample course.'}
];   

const ClassPage = () => {
  const [activeCourses, setActiveCourses] = useState(activeCoursesData);
  const [finishedCourses, setFinishedCourses] = useState(finishedCoursesData);

  const handleRegisterCourse = (courseId, courseType) => {
    console.log(`Registered for ${courseType} course with ID ${courseId}`);
  };

  return (
      <div>
        <div>
          <Typography variant="h4" gutterBottom>
            Active Courses
          </Typography>

          {activeCourses.map((course) => (
            <CourseComponent course={course} onRegister={handleRegisterCourse}/>
          ))}
        </div>
        <div>
          <Typography variant="h4" gutterBottom>
            Finished Courses
          </Typography>
          {finishedCourses.map((course) => (
            <CourseComponent course={course} onRegister={handleRegisterCourse}/>
          ))}
        </div>
      </div>
  );
};

export default ClassPage;
