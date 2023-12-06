import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../Components/MainLayout';

const Home = () => {
  return (
    <MainLayout children={
    <div>
      <h1>Welcome to the Language Learning Platform!</h1>
      <Link to="/profile">Go to Profile</Link>
    </div>
    }/>
  );
};

export default Home;
