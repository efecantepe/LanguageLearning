// For example, in the Home component, you can add a link to the profile page:
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Language Learning Platform!</h1>
      <Link to="/profile">Go to Profile</Link>
    </div>
  );
};

export default Home;
