import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../Components/MainLayout';
import '../Css/Components.css'

const TeacherHome = () => {
  return (
    <MainLayout children={
      <div>
        <h1 className='test'>TEACHER PAGE</h1>
        <Link to="/TeacherProfile">Go to Profile</Link>
      </div>
    }/>
  );
};

export default TeacherHome;
