import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../Components/MainLayout';
import '../Css/Components.css'


const TeacherHome = () => {
  
    const [message, setMessage] = useState('')
    const [inbox, setInboxes ] = useState([])
    const [allMessages, setAllMessages] = useState([])



    return (
    
    <div>

        <p> Enter Message </p>

        <input
          type="text"
          placeholder="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button onClick={() => alert(message)}> Send </button>

    </div>
   
  );
  
};

export default TeacherHome;
