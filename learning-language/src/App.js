import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from './ProfilePage.js';
import Home from './Home'; // Example: Home page component


const App = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
