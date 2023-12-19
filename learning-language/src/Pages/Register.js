import React, { useState } from 'react';
import urlList from '../urllist';
import sendRequest from '../axios';
import axios from 'axios';

const Register = () => {
  const [userName, setUserName] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setRole] = useState('');
  const [gender, setGender] = useState('');


  return (
    <div>
      <h2>Register</h2>
      <form >
        <input
          type="userName"
          placeholder="UserName"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="surname"
          placeholder="Surname"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">Select Gender</option>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
          <option value="Other">Other</option>
        </select>
        <select value={userType} onChange={(e) => setRole(e.target.value)}>
          <option value="">Select Role</option>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit" onClick={()=>RegisterSubmit(userName,name,surname,email,password,gender,userType)}>Register</button>
      </form>
    </div>
  );
};

async function RegisterSubmit(username,name,surname,email,password,gender,userType){
  let obj ={
    username:username,
    name:name,
    surname:surname,
    email:email,
    password:password,
    gender:gender,
    user_type:userType
  }

  axios.post('http://localhost:3000/register',obj);
}

export default Register;
