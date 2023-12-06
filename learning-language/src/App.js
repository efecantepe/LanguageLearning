import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from './Pages/ProfilePage';
import Home from './Pages/Home';
import ClassPage from './Pages/ClassPage';


const App = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/profile" element={<ProfilePage />} />
        <Route exact path="/courses" element={<ClassPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
