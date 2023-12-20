import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from './Pages/ProfilePage';
import Home from './Pages/Home';
import ClassPage from './Pages/ClassPage';
import Login from './Pages/Login';
import Register from './Pages/Register';
import TeacherHome from './Pages/TeacherHome';
import TeacherProfile from './Pages/TeacherProfile';
import TeacherClass from './Pages/TeacherClass';
import Friend from './Pages/Friend'
import { useContext } from 'react';

const App = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/profile" element={<ProfilePage />} />
        <Route exact path="/courses" element={<ClassPage />} />
        <Route exact path="/TeacherHome" element={<TeacherHome />} />
        <Route exact path="/TeacherProfile" element={<TeacherProfile />} />
        <Route exact path="/TeacherClass" element={<TeacherClass />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path='/chat' element = {<Friend/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
