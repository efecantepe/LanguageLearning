import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../Components/MainLayout';
import '../Css/Components.css'

const Home = () => {
  return (
    <MainLayout children={
    <div>
      <h1 className='test'>Welcome to Online Language Learning Platform!</h1>
      <Link to="/profile">Go to Profile</Link>
    </div>
    }/>
  );
};

export default Home;
