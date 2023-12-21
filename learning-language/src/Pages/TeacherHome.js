import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../Components/MainLayout';
import '../Css/Components.css'
import TeacherLayout from '../Components/TeacherLayout';

const TeacherHome = () => {
  return (
    <TeacherLayout children={
      <div>
        <h1 className='test'>TEACHER PAGE</h1>
        <Link to="/TeacherProfile">Go to Profile</Link>
      </div>
    }/>
  );
};

export default TeacherHome;
